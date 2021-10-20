const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'handlebars')

app.get('/cad', (req, res) => {
    res.render('form')
})

app.post('/addpost', (req, res) => {
    
    res.send(`Title: ${req.body.title} - Description: ${req.body.content}`)
})

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080')
})