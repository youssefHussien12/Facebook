import { Router } from "express";
import { logOut, signin, signup } from "./users.contorller.js";
import { checkEmailExist } from "../../middelware/checkEmailExist.js";

const userRouter = Router()



userRouter.post('/signup', checkEmailExist, signup)
userRouter.post('/signin', signin)
userRouter.post('/logout', logOut)


export default userRouter