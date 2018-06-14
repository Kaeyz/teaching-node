// npm init and npm init -y
//Templating - We need to specify the file type extension of the file we are rendering OR we use app.set('view engine' 'extension')
/*
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
*/
// - Variables
// - Control Flow
// Styles and Partials
//// app.use(express.static('public')) - This specifically will serve all the files that we have in our public folder.
// *GET /style.css etc
app.use(express.static(__dirname + '/public'));
//  * // GET /static/style.css etc.
app.use('/static', express.static(__dirname + '/public'));
/*
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/files'));
app.use(express.static(__dirname + '/uploads'));


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

*/

// * be careful with folders and file paths
//ejs
// to map the EJS template engine to “.html” files:
// app.engine('html', require('ejs').renderFile);
//  app.renderFile(path, options, callback) - though note that it aliases this method as ejs.__express internally so if you’re using “.ejs” extensions you don’t need to do anything.
// The consolidate.js library maps Node template engines to follow this convention, so they work seamlessly with Express.
// var engines = require('consolidate');
// app.engine('haml', engines.haml);
// app.engine('html', engines.hogan);

// <% include partials/header %>
// <% include partials/footer %>
//pug
// app.engine('pug', require('pug').__express);
// !
// !

//  How POST request works
// BodyParser app.use(bodyParser.urlencoded({extended: true}))

// <%= evaluate the expression %>
// <% hide the logic %>

// Next topic will be Working with API and Creating APIs
// Database Integration
// Deeper look at RESTful Routing
// Authentication
// Authorization
// Associations
// Deploying