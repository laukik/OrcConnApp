var express = require('express');
var router = express.Router();
var oracledb = require('oracledb');
var connectionUrl = {
    user          : "user`",
    password      : "passwd",
    connectString : "localhost/XE"
  };
  
var QUERIES = {
  "orderstatus" : "SELECT SYSDATE FROM TAB"
  
}   
/* GET home page. */
router.get('/', function(req, res, next) {
  oracledb.getConnection( connectionUrl, function( err, connection){
    if( err) console.log(err);
    
    /* SHOW QUERIES OUTPUT......  */
    connection.execute(QUERIES.orderstatus, function (err, result) {
      if( err ) throw err;
      res.render('index', { queryResult: result });
    })
    
  });  
});

module.exports = router;
