//Added module dependencies
var bodyParser = require('body-parser');
var config = require('../../webpack.config.dev');
var express = require('express');
var path = require('path');
var webpack = require('webpack');

//instantiate server
var app = express();
var compiler = webpack(config);

//require wepack middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//requires bodyParser through middleware
app.use(bodyParser.json());

//Serves index page through static middleware
app.use(express.static(path.join(__dirname, '../../app'), {'index': ['index.html']}));

//sets permissive CORS headers to limit server routing to API level per React guidlines
app.use(function setHeaders(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Disable caching
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

var port = process.env.PORT || 7000;

require('./routes.js')(app);

app.listen(port, function listeningOnPort() {
  console.log('Listening on port ', port)
});
