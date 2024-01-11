// global variables 
const express = require('express'); // require express module
const bodyParser = require('body-parser'); // require body-parser module
const MongoClient = require('mongodb').MongoClient;
const app = express(); // create an express application
const PORT = 3000; // port constant
require('dotenv').config({ path: '.env' }); // import dotenv library and configure path

app.set('view engine', 'ejs');  // set app to use ejs
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); // set app to use body-parser for HTTP requests
app.use(bodyParser.json());

// configure each route with directions for HTTP requests

// connect to database
MongoClient.connect(process.env.MONGO_URI)
    .then(client => {
        const db = client.db('practice');
        const usersCollection = db.collection('users');

        //
        app.get('/', (req, res) => {
            usersCollection
                .find()
                .toArray()
                .then(results => {
                    res.render('index.ejs', {usersCollection: results})
                })
                .catch(error => console.error(error));
        })

        // handle post requests
        app.post('/users', (req, res) => {
            usersCollection
                .insertOne(req.body)
                .then(result => {
                    res.redirect('/');
                })
                .catch(error => console.log(error));
        });
    })
    .catch(error => console.error(error));

// listen for connection to port 3000
app.listen(PORT, function () {
    console.log(`Server is live! Listening at port ${PORT}`);
});