const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<b>Working</b>')
});

app.get('/api/:version', (req, res) => {
  const { version } = req.params
  const obj = {
    name: 'setemi',
    age: '21',
    version
   }
  res.json(obj)
});

app.post('/api/:version', (req, res) => {
  const { version } = req.params
  console.log(version);
  const { n, a } = req.query
  res.json({ n, a })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});