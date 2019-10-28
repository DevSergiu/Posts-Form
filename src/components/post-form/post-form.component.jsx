import React, { useState, useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import "./post-form.styles.scss";

const PostForm = () => {
  const { dispatch } = useContext(PostContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const updateTitle = e => setTitle(e.target.value);
  const updateBody = e => setBody(e.target.value);
  const updateTags = e => setTags(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_POST",
      post: {
        title,
        body,
        tags
      }
    });
    setTitle("");
    setBody("");
    setTags("");
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
            value={title}
            onChange={updateTitle}
            required
          />
          <input
            className="form--input"
            type="text"
            name="body"
            placeholder="запись"
            value={body}
            onChange={updateBody}
            required
          />
          <input
            className="form--input"
            type="text"
            name="tags"
            placeholder="тег, еще тег"
            value={tags}
            onChange={updateTags}
            required
          />
        </div>
        <button className="btn btn--post-add">Добавить</button>
      </form>
    </div>
  );
};

export default PostForm;
