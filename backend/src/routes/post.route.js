import { Router } from 'express';
import { createPost, getPosts, postUpdate, deletePost } from "../controllers/post.controller.js"

const router = Router();

router.post("/create", createPost);
router.get("/getPosts", getPosts);
router.patch("/update/:id", postUpdate);
router.delete("/delete/:id", deletePost);

export default router;