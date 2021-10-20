require('dotenv').config()

const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', process.env.DB_USER, process.env.DB_PASSWD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Connected')
}).catch((error) => {
    console.log('Error connectiong: ' + error)
})