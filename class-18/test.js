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

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Postagem.sync({force: true})
Usuario.sync({force: true})

Postagem.create({
    titulo: 'Um titulo',
    conteudo: 'Um conteudo qualquer'
})

Usuario.create({
    nome: 'Fulano',
    sobrenome: 'Silva',
    idade: 25,
    email: 'fulano@email.com.br'
})