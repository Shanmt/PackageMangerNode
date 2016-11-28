var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient,
 assert = require('assert');
var monk = require('monk');
 // Connection URL 
var url = 'localhost:27017/PackageManager';
var db = monk(url);
global.db = db;
var index = require('./routes/index');
// var todos = require('./routes/todos');
 
var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/template', express.static('template'));
app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));
app.use('/', index);
// app.use('/api/v1/', todos);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});
 
var server = app.listen(8000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
 
module.exports = app;