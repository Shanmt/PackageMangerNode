var express = require('express');
var url = require('url');
var router = express.Router();
var db = global.db;

 

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.html');
});
router.get('/getUsers', function(req, res) {
    //res.render('index.html');
   
        var emailid = '';
        var password = '';
        var collection = db.collection('users');
        
        emailid = req.query.email;
        password = req.query.password;
        var json = collection.find({"email":emailid,"password":password},{ limit : 1 },function(e,docs){
           // res.end(JSON.stringify({ status: docs}));
           console.log(docs);
            if(docs.length > 0){
                res.json({user:docs,status:true});
            }
            else{
               res.json({status:false});
            }
        db.close();    
        });
        
       
});
router.get('/getControlSettings', function(req, res) {
    
    var controls = '';
    
    var collection = db.collection('controls');
    controls = req.query.control;
    var json = collection.find({"name":controls},{ limit : 1 },function(e,docs){
       
        
        if(docs.length > 0){
            res.json({details:docs,status:true});
        }
        else{
            res.json({status:false});
        }
    db.close();    
    });
        
       
});
 
module.exports = router;