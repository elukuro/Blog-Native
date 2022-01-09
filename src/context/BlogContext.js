import React, { createContext, useState } from "react";
// create context
const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // provider are source information that avaliable for child component initialize before app component
  // it's bring value that able to pass around the child component

  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPosts = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog post # ${blogPosts.length + 1}` },
    ]);
  };
  return (
    <BlogContext.Provider
      value={{ data: blogPosts, addBlogPost: addBlogPosts }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
