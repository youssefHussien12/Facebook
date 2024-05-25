import { DataTypes} from 'sequelize'
import { sequelize } from '../../database/database.connection.js'

export const usersModel = sequelize.define('user',{
    userName:{
        type:DataTypes.STRING(100)
    },
    email:{
        type:DataTypes.STRING(100)
    },
    password:{
        type:DataTypes.STRING(200)
    }
})


