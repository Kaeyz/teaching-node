const express = require('express')
const app = express()

function reverse(word) {
  const reversed = word.split('').reverse().join('')
  return reversed
}

// reverse('appplwelele')

app.get('/', function(req, res) {
  console.log('hellow world in the terminal')
  res.send('hello world');
})

app.get('/about', function(req, res) {
  console.log('hello world in the terminal from About Page')
  res.send('About');
})

app.get('/reverse/:word', function(req, res) {
  const reversed = reverse(req.params.word)
  console.log(reversed)
  res.send(reversed);
})

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});


