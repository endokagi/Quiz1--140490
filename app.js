var express = require("express");
var app = express();
var data = require("./data.json");

app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render('pages/home', {info: data});
});

app.get("/students", function(req,res){
    res.render('pages/students', {info: data});
});

app.listen(9874);
