import React, { useContext } from "react";
import Post from "../post/post.component";
import { PostContext } from "../../contexts/PostContext";

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <div>
      {posts.map((post, id) => (
        <Post
          title={post.title}
          body={post.body}
          tags={post.tags}
          id={post.id}
          key={id}
        />
      ))}
    </div>
  );
};

export default PostList;
