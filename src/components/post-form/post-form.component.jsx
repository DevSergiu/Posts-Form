import React, { useState, useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
// import validate, { errors } from "../../validateForm";

import "./post-form.styles.scss";

const PostForm = validateForm => {
  const { dispatch } = useContext(PostContext);

  const [posts, setPosts] = useState({ title: "", body: "", tags: "" });
  const [errors, setErrors] = useState({ title: " ", body: " ", tags: " " });

  const handleChange = e => {
    const { name, value } = e.target;
    setPosts({
      ...posts,
      [name]: value
    });
  };

  const validate = posts => {
    let errors = {};

    if (!posts.title) {
      errors.title = "Title is required";
    } else if (!/^[a-zA-Z0-9]{4,10}$/.test(posts.title)) {
      errors.title =
        "Title: special characters not allowed ,must contain between 4-10 characters";
    }
    if (!posts.body) {
      errors.body = "body is required";
    } else if (posts.body.length < 10) {
      errors.body = "Body: needs to be more than 10 characters";
    }
    if (!posts.tags) {
      errors.tags = "tags is required";
    } else if (!/^[a-z](?!.* {2})[ \w.-]{2,24}$/.test(posts.tags)) {
      errors.tags = "Tags: separate your tags with 1 space";
    }
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(posts));
    if (!errors.title) {
      dispatch({
        type: "ADD_POST",
        post: {
          title: posts.title,
          body: posts.body,
          tags: posts.tags
        }
      });
    }
    setPosts({ title: "", body: "", tags: "" });
  };

  return (
    <div className="post--Form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form--input"
            type="text"
            name="title"
            placeholder="заголовок"
            value={posts.title}
            onChange={handleChange}
            required
          />
          <div className="error">{errors.title && <p>{errors.title}</p>}</div>
          <input
            className="form--input"
            type="text"
            name="body"
            placeholder="запись"
            value={posts.body}
            onChange={handleChange}
            required
          />
          <div className="error">{errors.body && <p>{errors.body}</p>}</div>
          <input
            className="form--input"
            type="text"
            name="tags"
            placeholder="тег, еще тег"
            value={posts.tags}
            onChange={handleChange}
            required
          />
          <div className="error">{errors.tags && <p>{errors.tags}</p>}</div>
        </div>
        <button className="btn btn--post-add">Добавить</button>
      </form>
    </div>
  );
};

export default PostForm;
