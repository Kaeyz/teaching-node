const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  res.render('home.ejs')
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', (req, res) => {
  let user = []
  const {name, email} = req.body

  user.push({name: name, email: email})

  console.log(user);

  res.render('show.ejs', { user: req.body });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});