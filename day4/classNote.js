
app.get('/', (req, res) => { /* */ })
app.post('/', (req, res) => { /* */ })
app.put('/', (req, res) => { /* */ })
app.delete('/', (req, res) => { /* */ })
app.patch('/', (req, res) => { /* */ })

// ! Restful Routes
app.get('/', (req, res) => {/* homepage */ });
app.get('/create', (req, res) => {/* login */ });
app.post('/create', (req, res) => {/* login */ });

// * request parameters
req.locals.name = 'Flavio'
// * Response
// * Routing and named parameters
// * using regular expression to match a path
app.get('/post/', (req, res) => { });

// * Middleware
const myMiddleware = (req, res, next) => {
  /* ... */
  next()
}

app.get('/', myMiddleware, (req, res) => res.send('Hello World!'))
// TODO : app.use(express.static('public'))
// Templating with ejs, pug, and hbs mention - express-react-views(jsx)
// npm install express-react-views react react-dom

const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/about', (req, res) => {
  res.render('about', { name: 'Flavio' })
})

app.listen(3000, () => console.log('Server ready'))

// about.jsx file in views/

var React = require('react')

class HelloMessage extends React.Component {
  render() {
    return <div>Hello from {this.props.name}</div>
  }
}

module.exports = HelloMessage
//Redis , using sockets

const capitalized = (str) => {
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1)
}

capitalized('setemi')
capitalized(0)
capitalized(012344)