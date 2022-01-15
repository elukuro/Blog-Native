// import React, { createContext, useState, useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

// create context
// const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOGPOSTS":
      return action.payload;
    // case "ADD_BLOGPOST":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 99999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];

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

const getBlogPost = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/blogposts");
      dispatch({ type: "GET_BLOGPOSTS", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    try {
      const response = await jsonServer.post("/blogposts", { title, content });
      if (response.status === 201) {
        // dispatch({ type: "ADD_BLOGPOST", payload: { title, content } });
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    try {
      const response = await jsonServer.put(`/blogposts/${id}`, {
        title,
        content,
      });
      if (response) {
        dispatch({ type: "EDIT_BLOGPOST", payload: { id, title, content } });
        callback();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      const response = await jsonServer.delete(`/blogposts/${id}`);
      // console.log(response);
      dispatch({ type: "DELETE_BLOGPOST", payload: id });
    } catch (err) {
      console.log(err);
    }
  };
};

const showBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "SHOW_BLOGPOST", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPost, addBlogPost, deleteBlogPost, showBlogPost, editBlogPost },
  []
);
