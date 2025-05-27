// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../components/Blog/blogsSlice.jsx";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});