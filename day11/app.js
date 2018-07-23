// express details
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const {
  check,
  validationResult
} = require('express-validator/check');
const {
  matchedData,
  sanitize
} = require('express-validator/filter');
const session = require('express-session')
// passport details
const passport = require('passport')
const LocalStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// User model
const User = require('./model/User')
const userController = require('./controllers/userController')

mongoose.connect('mongodb://localhost:27017/auth_demo_app', {
  useNewUrlParser: true
})

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  secret: 'teaching-node-kolade',
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }
}))

// Passport Setup
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  })
});

app.get('/register', userController.registerForm)

app.post('/register', userController.register)

app.get('/dashboard', userController.isLoggedIn, userController.dashboard);

app.get('/login', userController.loginForm);

app.post('/login', userController.login)



app.get('/logout', userController.logout);


app.listen(5000, () => {
  console.log('App listening on port 5000!');
});