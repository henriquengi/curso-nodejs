const http = require('http')

http.createServer((req, res) => {
    res.end('Hello World! Welcome to my website')
}).listen(8080)

console.log('Server running')

