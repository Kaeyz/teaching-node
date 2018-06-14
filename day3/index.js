/* const http = require('http')

const host = '127.0.0.1'
const port = 9999

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello, world')
})

server.listen(port,host, () => {
  console.log(`server running at http://${host}:${port}`)
})


 */

const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 9999

app.get('/', (req, res) => {
  res.send('welcome to express js')
})

app.get('/hello', (req, res) => {
  console.log('hello')
  res.send('from the hello route');
})

app.get('/repeat/:word/:times', (req, res) => {
  const {word, times} = req.params
  console.log(word, times)
  times 
  res.send({word, times});
})

app.get('*', (req, res) => {
  res.send('Wrong routes')
})

app.listen(port, host, function() {
  console.log(`server is running on http://${host}:${port}`)
})

