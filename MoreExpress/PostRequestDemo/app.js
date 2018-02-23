var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
    res.render("friends", {friends: friends}); // The second "friends" is the var declared in this app.get
});

app.post("/addfriend", function(req, res) {
    res.send("You have reached the post route");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server listening!");
});