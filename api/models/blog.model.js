import mongoose, { Schema } from "mongoose";
const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: String
}, { timestamps: true });

const Blog = mongoose.models.Blogs || mongoose.model("Blog", blogSchema);
export default Blog;