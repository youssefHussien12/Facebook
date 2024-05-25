import { Router } from "express";
import { addPost, deletePost, getAllPosts, getSingelPost,getUserPostsAndComments, updatePost } from "./post.controller.js";
const postRouter = Router()

postRouter.route('/').post(addPost).get(getAllPosts)
postRouter.route('/:id').put(updatePost).delete(deletePost).get(getSingelPost)
postRouter.get('/:id/comments', getUserPostsAndComments)


export default postRouter