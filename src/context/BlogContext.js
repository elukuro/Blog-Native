// import React, { createContext, useState, useReducer } from "react";
import createDataContext from "./createDataContext";

// create context
// const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    case "DELETE_BLOGPOST":
      return state.filter((post) => post.id !== action.payload);

    case "SHOW_BLOGPOST":
      return state.find((post) => post.id === action.payload);

    case "EDIT_BLOGPOST":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

// export const BlogProvider = ({ children }) => {
// provider are source information that avaliable for child component initialize before app component
// it's bring value that able to pass around the child component

// const [blogPosts, setBlogPosts] = useState([]);

// initialize reducer
// const [blogPosts, dispatch] = useReducer(blogReducer, []);

// const addBlogPosts = () => {
//   setBlogPosts([
//     ...blogPosts,
//     { title: `Blog post # ${blogPosts.length + 1}` },
//   ]);
// };

// return (
//   <BlogContext.Provider
//     value={{
//       data: blogPosts,
//       addBlogPost,
//     }}
//   >
//     {children}
//   </BlogContext.Provider>
// );
// };

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOGPOST", payload: { title, content } });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "EDIT_BLOGPOST", payload: { id, title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOGPOST", payload: id });
  };
};

const showBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "SHOW_BLOGPOST", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, showBlogPost, editBlogPost },
  [{ title: "TEST POST", content: "TEST CONTENT", id: 123 }]
);
