import { DataTypes} from 'sequelize'
import { sequelize } from '../../database/database.connection.js'

export const commentsModel = sequelize.define('comment',{
    content:{
        type:DataTypes.STRING(400)
    },
    postId:{
        type:DataTypes.INTEGER
    },
    userId:{
        type:DataTypes.INTEGER
    }
})


