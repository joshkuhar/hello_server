var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/:firstname/:lastname', function(request, response) {
	var first = request.params.firstname;
	var last = request.params.lastname;
	response.send(["Hello", first, last].join(" "));
});

app.get('/test', function(request, response){
	response.send("I worked");
});

app.get('/jedi/:firstname/:lastname', function(request, response) {
	var first = request.params.firstname;
	var last = request.params.lastname;
	response.send(["Hello", last.substring(0, 2) + first.substring(0, 3)].join(" "));
});

app.get('/json', function(request, response) {
	response.json({
		name: 'Kim Gordon',
		instrument: 'Bass'
	});
});

app.get('/t', function(request, response) {
	response.send(request.headers);
});


app.listen(8080);

