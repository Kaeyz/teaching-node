const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let users = [
  { name: 'setemi', email: 'setemiojo@gmail.com' },
  { name: 'setemi', email: 'setemiojo@gmail.com' },
  { name: 'ayo', email: 'ayo@gmail.com' }
]

app.get('/', (req, res) => {
  res.render('home.ejs')
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', (req, res) => {
  const {name, email} = req.body

  users.push({name: name, email: email})

  console.log(users);

  res.render('show.ejs', { users });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});