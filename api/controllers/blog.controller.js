import Blog from "../models/blog.model.js";

export const newBlog =  async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all fields"
    })
  }
  if (title.length < 4) {
    return res.status(400).json({
      success: false,
      message: "Titlte must be more than 4 characters"
    })
  }
  if (description.length < 8) {
    return res.status(400).json({
      success: false,
      message: "blog description must be more than 8 characters"
    })
  }
  try {
    const newBlog = await Blog.create({ title, description });
    return res.status(201).json({ message: "Blog created successfully" })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
