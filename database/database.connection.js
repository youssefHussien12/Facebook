import { Sequelize } from 'sequelize'



export const sequelize = new Sequelize('facebook', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
})



