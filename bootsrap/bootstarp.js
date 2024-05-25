import commentsRouter from "../modules/comments/comments.routes.js"
import postRouter from "../modules/posts/post.routes.js"
import userRouter from "../modules/users/users.routes.js"
import express from 'express'
import cors from 'cors'




const bootstrap = (app)=>{
 app.use(cors())
app.use(express.json())
app.use('/auth', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentsRouter)

}


export default bootstrap