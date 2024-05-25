import { commentsModel } from "../../models/comments/comments.model.js"
import { postsModel } from "../../models/posts/posts.model.js"
import { usersModel } from "../../models/usres/users.model.js"


const addPost = async (req, res) => {
    let {id} = await postsModel.create(req.body)
    res.status(201).json({ message: 'success', id})
}


const getAllPosts = async (req, res) => {
    let { count, rows } = await postsModel.findAndCountAll({
        include: {
            model: usersModel,
            attributes: ["userName", "email"]
        }, attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    })
    res.status(200).json({ message: 'success', allPosts: count, posts: rows })
}




const getSingelPost = async (req, res) => {
    let userPost = await postsModel.findOne({
        where: {
            author: req.params.id
        }
    })
    res.status(200).json({ message: 'success', userPost })
}


const updatePost = async (req, res) => {
    let [created] = await postsModel.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    if (created) {
        res.status(200).json({ message: 'updated' })
    } else {
        res.status(409).json({ message: 'post not found' })
    }
}


const deletePost = async (req, res) => {
    let created = await postsModel.destroy({
        where: {
            id: req.params.id
        }
    })
    if (created) {
        res.status(200).json({ message: 'deleted' })
    } else {
        res.status(409).json({ message: 'post not found' })
    }
}


const getUserPostsAndComments = async (req, res) => {
    let user = await usersModel.findOne({
        include: [
            {
                model: postsModel,
            },
            {
                model: commentsModel,
               where:{
                userId:req.params.id
               }
               
            }] ,attributes:{
                exclude:["createdAt","updatedAt"]
            }
    })
    if (user == null) {
        res.status(200).json({ message: 'user not found'})    
    }else{
        res.status(200).json({ message: 'success',user})
    }
}

export {
    addPost,
    getAllPosts,
    updatePost,
    deletePost,
    getSingelPost,
    getUserPostsAndComments
}