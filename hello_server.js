var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/test', function(request, response){
	response.send("I worked");
});

exports.app = app;

