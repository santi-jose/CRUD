// global variables 
const express = require('express'); // require express module
const bodyParser = require('body-parser'); // require body-parser module
const MongoClient = require('mongodb').MongoClient;
const app = express(); // create an express application
const PORT = 3000; // port constant

// set app to use body-parser for HTTP requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure each route with directions for HTTP requests

// handle get requests 
app.get('/', function(req, res){
    // route to send index.html file via path 
    res.sendFile(__dirname + '/index.html');
});

// handle post requests
app.post('/users', (req, res) => {
    console.log(req.body);
});


// listen for connection to port 3000
app.listen(PORT, function(){
    console.log(`Server is live! Listening at port ${PORT}`);
});