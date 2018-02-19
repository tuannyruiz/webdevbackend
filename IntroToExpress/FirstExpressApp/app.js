var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});


// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "WOOF"
app.get("/dog", function(req, res) {
    console.log("Someone made a request!");
    res.send("Woof!");
});

app.get("*", function(req, res) {
    res.send("You are a star!");
}); //STAR ROUTE ALWAYS IN THE END OF THE CODE BECAUSE ROUTE ORDER MATTERS!!!

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});
