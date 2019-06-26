var express = require('express');
var app = express();


var Contoso=function(req, res){
  console.log("Calling  rest api for customer accounting info");
  var account = [
    {id:1, Name:"Siddhart",balance:5000},
    {id:2, Name:"Shivpal",balance:15000},
    {id:3, Name:"Prasad",balance:12000}
  ];
  
  res.send(account);
   
};
 
app.get('/info',Contoso);

var server = app.listen(8089, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Contoso Accounting app listening at http://localhost:8089", host, port)
})