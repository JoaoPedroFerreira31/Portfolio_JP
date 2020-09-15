var express = require("express");
var app = express();

app.set("view engine", "ejs");  

// ==============
//     ROUTES
// ==============

//Root Route
app.get("/", function(req, res){
    res.redirect("home");
});

//Home 
app.get("/home", function(req, res){ 
    res.render("home");
});

//Server Started 
app.listen(process.env.PORT, process.env.IP, function(){ 
    console.log("Server has started");
});
console.log(process.env.PORT);