const mongoose = require('mongoose')
const User = mongoose.model('User')
const passport = require('passport')

exports.registerForm = (req, res) => {
  res.render('register', {title: 'Register'})
}

exports.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

exports.register = (req, res) => {
  const {username, password, email} = req.body;
  const newUser = new User({ username: username, email: email })

  User.register(newUser, password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render('register')
    }

    passport.authenticate('local')(req, res, () => {
      res.redirect('/dashboard')
    })
  })
}

exports.loginForm = (req, res) => {
  res.render('login')
}

exports.login = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}), (req, res) => {}

exports.dashboard = (req, res) => {
  res.render('dashboard', {title: 'UserDashboard'});
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}

