import { usersModel } from "../models/usres/users.model.js";
import bcrypt from 'bcrypt'

export  const checkEmailExist= async (req , res , next)=>{
    let email = req.body.email
    req.body.password = bcrypt.hashSync(req.body.password , 8)
    let emailExist = await usersModel.findOne({
        where:{
            email
        }
    })
    if (emailExist)return res.status(409).json({message:'email already exists'}) 
        next()
}