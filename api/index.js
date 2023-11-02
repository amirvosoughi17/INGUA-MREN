import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { blogRoute } from "./routes/blog.route.js";
const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("App connected  to Database")
  })
  .catch((err) => console.log(err))

app.listen(process.env.PORT)

app.use(express.json());
app.use(cors());

app.use("/api/v1/blog", blogRoute);