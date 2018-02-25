var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends}); // The second "friends" is the var declared in this app.get
});

app.post("/addfriend", function(req, res) {
   var newFriend = req.body.newfriend; //newfriend is the 'name' of the input we're getting the data from
   friends.push(newFriend);
    res.send("You have reached the post route");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server listening!");
});