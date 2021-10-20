require('dotenv').config()

const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('test', process.env.DB_USER, process.env.DB_PASSWD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

app.engine('handlebars', handlebars({defaultLayout: 'main'}))

app.set('view engine', 'handlebars')

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080')
})

