const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 9999

// app.set('view engine', 'html')
// app.set('view engine', 'pug')
// app.set('view engine', 'ejs')
// app.set('views', './views')
// app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home.pug', { user: 'Setemi', title: 'Welcome to our learning Class', name: 'Oluwasetemi' })
})

app.get('*', (req, res) => {
  res.send('Wrong routes')
})

app.listen(port, host, function() {
  console.log(`server is running on http://${host}:${port}`)
})

