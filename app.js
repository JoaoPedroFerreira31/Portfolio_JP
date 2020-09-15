var express = require("express");
var app = express();

//Server Started 
app.listen(process.env.PORT, process.env.IP, function(){ 
    console.log("Server has started");
});