var express = require('express');
var url = require('url');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient,
 assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/PackageManager';

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index.html');

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
       
        
        var collection = db.collection('users');
        
        emailid = req.query.email;
        password = req.query.password;
        collection.find({"email":emailid,"password":password}).toArray(function(err, docs) {
            if(docs.length > 0){
                res.end(JSON.stringify(docs));
            }
            else{
                res.end(JSON.stringify("No User"))
            }
        });

        db.close();
       
     });

    res.end();
});
 
module.exports = router;