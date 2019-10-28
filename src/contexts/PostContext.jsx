import React, { useEffect, createContext, useReducer } from "react";
import { postReducer } from "../reducers/postReducer";
import postsData from "../assets/posts.json";

export const PostContext = createContext();

export const PostProvider = props => {
  const [posts, dispatch] = useReducer(postReducer, [...postsData], () => {
    const localData = localStorage.getItem("posts");
    return localData ? JSON.parse(localData) : [...postsData];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {props.children}
    </PostContext.Provider>
  );
};
