// store/blogsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await fetch(
    "http://localhost:1337/api/spadvertising-blogs?populate=coverImage"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const json = await res.json();
  return json.data;
});

export const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case "heading":
          const level = block.level || 2;
          const HeadingTag = `h${level}`;
          return <HeadingTag key={index}>{block.children[0]?.text}</HeadingTag>;
        case "paragraph":
          return <p key={index}>{block.children.map((child, i) => child.text)}</p>;
        case "list":
          return (
            <ul key={index}>
              {block.children.map((item, i) => (
                <li key={i}>{item.children.map((child, j) => child.text)}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };


const blogsSlice = createSlice({
  name: "blogs",
  initialState: { blogs: [], error: null, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;