const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post')

app.set('views', __dirname + '/views');

app.engine('handlebars', handlebars({defaultLayout: 'main'}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cad', (req, res) => {
    res.render('form')
})

app.post('/addpost', (req, res) => {
    
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then(() => {
        res.redirect('/')
    }).catch((error) => {
        res.send('Error - Coudnt create post!<br>' + error)
    })
})

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080')
})