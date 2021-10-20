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

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
})