import { Router } from "express";
import { addComment, deleteComment, getAllcomments, updateComment } from "./comments.contorller.js";

const commentsRouter = Router()

commentsRouter.route('/').post(addComment).get(getAllcomments)
commentsRouter.route('/:id').put(updateComment).delete(deleteComment)



export default commentsRouter