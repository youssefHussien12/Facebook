import postRouter from "../modules/posts/post.routes.js"
import userRouter from "../modules/users/users.routes.js"
import commentsRouter from '../modules/comments/comments.routes.js'
import express from 'express'




const bootstrap = (app) => {
    app.use(express.json())
    app.use('/auth', userRouter)
    app.use('/posts', postRouter)
    app.use('/comments', commentsRouter)

}


export default bootstrap