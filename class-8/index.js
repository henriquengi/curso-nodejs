const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to my app!')
})

app.get('/about', (req, res) => {
    res.send('My about page')
})

app.get('/blog', (req, res) => {
    res.send('Welcome to my blog!')
})

app.get('/ola/:cargo/:name/:color', (req, res) => {
    res.send(`<h1>Hi ${req.params.name}</h1><h2>Your job is ${req.params.cargo}</h2><h2>Your favorite color is ${req.params.color}</h2>`)
})

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
})