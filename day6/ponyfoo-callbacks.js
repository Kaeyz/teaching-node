let request = require('request')
let hget = require('hget')
let marked = require('marked')
let Term = require('marked-terminal')

getRandomPonyFooArticle()

function getRandomPonyFooArticle() {
  request('https://ponyfoo.com/articles/random', (err, res, body) => {
    if (err) {
      console.error(err); return;
    }
    let html = hget(body, {
      markdown: true,
      root: 'main',
      ignore: '.at-subscribe,.mm-comments,.de-sidebar'
    })

    let md = marked(html, {
      renderer: new Term()
    })
    console.log(md);
  })
}