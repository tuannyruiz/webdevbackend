var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello there! Welcome to my assignement!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof woof",
        goldfish: "..."
    }
    var sound = sounds[animal];
    res.send("The " + animal +  " says: " + sound)
})

app.get("/repeat/:word/:times", function(req, res) {
    var word = req.params.word;
    var times = req.params.times;
    res.send((word + ' ').repeat(times));
})

app.get("*", function(req, res){
    res.send("Sorry, page not found!")
})

// server

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server working!");
})