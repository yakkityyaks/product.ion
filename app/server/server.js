//Added module dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

//requires bodyParser through middleware
app.use(bodyParser.json());

//Serves index page through static middleware
app.use(express.static(path.join(__dirname, '../../app'), {'index': ['client/index.html']}));

//sets permissive CORS headers to limit server routing to API level per React guidlines
app.use(function setHeaders(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Disable caching
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

var app = express();

var port = process.env.PORT || 3000;

require('./routes.js')(app);

app.listen(port, function listeningOnPort() {
  console.log('Listening on port ', port)
});
