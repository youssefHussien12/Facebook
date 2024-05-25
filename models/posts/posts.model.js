import { DataTypes} from 'sequelize'
import { sequelize } from '../../database/database.connection.js'

export const postsModel = sequelize.define('post',{
    title:{
        type:DataTypes.STRING(100)
    },
    content:{
        type:DataTypes.STRING(400)
    }
})


