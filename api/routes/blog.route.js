import { Router } from "express";
import { newBlog } from "../controllers/blog.controller.js";
import multer  from "multer";
const upload = multer({dest: "../images"})

const router = Router();
router.post("/new" ,newBlog);
export { router as blogRoute };