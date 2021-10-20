const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post')

app.set('views', __dirname + '/views');

app.engine('handlebars', handlebars({defaultLayout: 'main', runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    Post.findAll({
        order: [['id', 'DESC']]
    }).then((dbpost) => {
        res.render('home', {posts: dbpost})
    })
    
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