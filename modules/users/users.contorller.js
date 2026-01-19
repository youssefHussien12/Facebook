
import { usersModel } from "../../models/usres/users.model.js"


const signup = async (req, res) => {
    let usre = await usersModel.create(req.body)
    res.status(201).json({ message: 'success'})
}


const signin = async (req, res) => {
    let email = req.body.email
    let signInEmail = await usersModel.findOne({
        where: {
            email
        }
    })
    let id = signInEmail?.id
    if (signInEmail != null) {
        return res.status(200).json({ message: 'login..... token', id })
    } else {
        return res.status(401).json({ message: 'email incorrect' })
    }
}


const logOut = async (req, res) => {
    let email = req.body.email
    let logOut = await usersModel.destroy({
        where: {
            email
        }
    })
    if (logOut != 0) {
        return res.status(200).json({ message: 'logedOut' })
    } else {
        return res.status(404).json({ message: 'email not found' })
    }

}




export {
    signup,
    signin,
    logOut
}