import { commentsModel } from "../../models/comments/comments.model.js"
import { postsModel } from "../../models/posts/posts.model.js"
import { usersModel } from "../../models/usres/users.model.js"


const addComment = async (req, res) => {
    let comments = await commentsModel.create(req.body)
    res.status(201).json({ message: 'success', comments })
}



const getAllcomments = async (req, res) => {
    let { count, rows } = await commentsModel.findAndCountAll({
        include: [
            {
                model: usersModel,
                attributes: ["userName", "email"]
            },

            {
                model: postsModel,
                attributes:{
                    exclude:"author"
                }
            }]
    })
    res.status(200).json({ message: 'success', allcomments: count, comments: rows })
}



const updateComment = async (req, res) => {
    let [created] = await commentsModel.update(req.body, {
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


const deleteComment = async (req, res) => {
    let created = await commentsModel.destroy({
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


export {
    addComment,
    getAllcomments,
    updateComment,
    deleteComment
}