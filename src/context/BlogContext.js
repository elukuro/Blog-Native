import React, { createContext, useState, useReducer } from "react";
// create context
const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [...state, { title: `Blog post # ${state.length + 1}` }];
    case "DELETE_BLOGPOST":
      return [...state];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  // provider are source information that avaliable for child component initialize before app component
  // it's bring value that able to pass around the child component

  // const [blogPosts, setBlogPosts] = useState([]);

  // initialize reducer
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  // const addBlogPosts = () => {
  //   setBlogPosts([
  //     ...blogPosts,
  //     { title: `Blog post # ${blogPosts.length + 1}` },
  //   ]);
  // };

  const addBlogPost = () => {
    dispatch({ type: "ADD_BLOGPOST" });
  };

  return (
    <BlogContext.Provider
      value={{
        data: blogPosts,
        addBlogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
