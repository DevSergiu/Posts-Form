import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import Tags from "../tags/tags.component";

import "./post.styles.scss";

const Post = ({ title, body, tags, id }) => {
  const { dispatch } = useContext(PostContext);

  return (
    <div className="post">
      <div>
        <h3 className="post--title">{title}</h3>
        <p className="post--body">{body}</p>

        {Object.values(tags).map((tag, id) => (
          <Tags classTag="btn btn--tag" tag={tag} key={id} />
        ))}

        <div>
          <button
            className="btn btn--post-delete"
            onClick={() => dispatch({ type: "REMOVE_POST", id })}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
