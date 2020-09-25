var express = require("express");
var app = express();

app.set("view engine", "ejs");  
app.use(express.static(__dirname + "/Public"));

// ==============
//     ROUTES
// ==============

//Root Route
app.get("/", function(req, res){
    res.redirect("/pagina_inicial");
});

//Home 
app.get("/pagina_inicial", function(req, res){ 
    res.render("home");
});

//Processos
app.get("/processos", function(req, res){
    res.render("processos");
});

//Contactos
app.get("/contactos", function(req, res){
    res.render("contactos");
});

//Server Started 
app.listen(process.env.PORT, process.env.IP, function(){ 
    console.log("Server has started");
});
console.log(process.env.PORT);