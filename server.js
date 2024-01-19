// global variables 
const express = require('express'); // require express module
const bodyParser = require('body-parser'); // require body-parser module
const MongoClient = require('mongodb').MongoClient;
const app = express(); // create an express application
const PORT = 3000; // port constant
require('dotenv').config({ path: '.env' }); // import dotenv library and configure path
const { PrismaClient } = require('@prisma/client'); // import PrismaClient
const prisma = new PrismaClient(); // create instance of PrismaClient
// use `prisma` in your application to read and write data in your DB

app.set('view engine', 'ejs');  // set app to use ejs
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); // set app to use body-parser for HTTP requests
app.use(bodyParser.json());


// configure each route with directions for HTTP requests

app.post('/users', (req, res) => {
    const {username, password} = req.body; // get username and password from req.body
    prisma.user.create({
        data: {
            username,
            password,
            posts: {
                create: {
                    title: 'My first post',
                    body: 'Lots of really interesting stuff',
                },
            },
        }
    })
    .then(result => {
        res.redirect('/');
    })
    .catch(error => {
        // Handle errors
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    });
});

// connect to database
MongoClient.connect(process.env.MONGO_URI)
    .then(client => { // connect to MongoClient
        const db = client.db('practice'); // create db practice
        const usersCollection = db.collection('users'); // create collection of users

        // handle get request at root 
        app.get('/', (req, res) => {
            usersCollection
                .find() // get cursor to iterate through collection
                .toArray() // returns an array of documents of collection
                .then(results => { // when resolved render index.ejs with results as userCollections
                    res.render('index.ejs', {usersCollection: results});
                }) // error handling
                .catch(error => console.error(error));
        });

        // handle post requests at 'users'
        // app.post('/users', (req, res) => {
        //     usersCollection
        //         .insertOne(req.body) // insert the request body into collection
        //         .then(result => { // if inser successful redirect to root
        //             res.redirect('/');
        //         }) // error handling
        //         .catch(error => console.log(error));
        // });
    })
    .catch(error => console.error(error));

// listen for connection to port 3000
app.listen(PORT, function () {
    console.log(`Server is live! Listening at port ${PORT}`);
});