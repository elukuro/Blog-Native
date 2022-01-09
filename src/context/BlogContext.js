import React, { createContext } from "react";
// create context
const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  // provider are source information that avaliable for child component initialize before app component
  // it's bring value that able to pass around the child component s
  return (
    <BlogContext.Provider value={"Hi there "}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
