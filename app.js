import express from 'express'
import { sequelize } from './database/database.connection.js'
import { usersModel } from './models/usres/users.model.js'
import { postsModel } from './models/posts/posts.model.js'
import { commentsModel } from './models/comments/comments.model.js'
import bootstrap from './bootsrap/bootstarp.js'
const app = express()
const port = 3000



bootstrap(app)

sequelize.sync({ alter: true })




usersModel.hasMany(postsModel,{
    foreignKey:"author",
    onDelete:"CASCADE",
    onDelete:"CASCADE"
})
postsModel.belongsTo(usersModel,{
    foreignKey:"author",

})

postsModel.hasMany(commentsModel)
commentsModel.belongsTo(postsModel)

usersModel.hasMany(commentsModel)
commentsModel.belongsTo(usersModel)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))