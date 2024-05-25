import { Sequelize } from 'sequelize'



export const sequelize = new Sequelize('mysql://ucj4d4ebnwvpmaeu:NCLo35FK4HlWNQKqXvOv@bafcxx4ll2wupxk6wl6u-mysql.services.clever-cloud.com:3306/bafcxx4ll2wupxk6wl6u')


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
})



