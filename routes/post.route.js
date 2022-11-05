import express from "express";
import { createPost, deletePost, getAllPosts, getSinglePost, updatePost } from "../controllers/postController.js";
var router = express.Router();


router.get("/", getAllPosts)
router.get("/id/:id", getSinglePost)
router.post("/create", createPost)
router.put("/update/id/:id", updatePost)
router.delete("/delete/id/:id", deletePost)

export default router;