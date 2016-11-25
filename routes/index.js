var express = require('express');
var router = express.Router();
var mongo = require('mongodb'),  
  Server = mongo.Server,
  Db = mongo.Db;
var server = new Server('localhost', 27017, {  
  auto_reconnect: true
});
var db = new Db('PackageManager', server);  
var onErr = function(err, callback) {  
  db.close();
  callback(err);
};
 
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.html');
    res.end();
});
 
module.exports = router;