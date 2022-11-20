var express = require('express');
var router = express.Router();
var path =require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/test.html'));
});

router.get('/test', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/test1.html'));
});
module.exports = router;
