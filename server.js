// global variables 
const express = require('express'); // require express module
const app = express(); // create an express application
const PORT = 3000; // port constant

// We need to configure each route with directions
// for our HTTP requests
app.get('/', function(requ, res){
    // route to send index.html via path 
    res.sendFile(__dirname + '/index.html');
})


// listen for connection to port 3000
app.listen(PORT, function(){
    console.log(`Server is live! Listening at port ${PORT}`);
})