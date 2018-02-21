var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello there! Welcome to my assignement!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    res.send("The " + animal +  " says: ")
})



app.get("*", function(req, res){
    res.send("Sorry, page not found!")
})

// server

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server working!");
})