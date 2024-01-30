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

// post users when they are submitted through submit-button
app.post('/users', async(req, res) => {
    const {username, password} = req.body; // get username and password from req.body
    prisma.user.create({ // create new user given req body params
        data: {
            username,
            password,
            posts: {
                create: {
                    title: `My first post, by: ${username}`,
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

// post user made posts 
app.post('/posts', async(req, res)=>{
    const {title, body} = req.body; // get title and body from req.body    
    prisma.post.create({ // create new post given req  body params
        data: {
            title,
            body,
            user: {
                create: {
                    username: 'prisma.post.create Test User',
                    password: 'prisma.post.create Test Password',
                },
            },
        }
    })
    .then(result => {
        res.redirect('/');
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({error: "Internal Server Error"});
    });
});

// connect to database
MongoClient.connect(process.env.MONGO_URI)
    .then(client => { // connect to MongoClient
        const db = client.db('practice'); // connect to db practice
        const usersCollection = db.collection('User'); // access the User collection

        // handle get request at root 
        // app.get('/', (req, res) => {
        //     usersCollection
        //         .find() // get cursor to iterate through collection
        //         .toArray() // returns an array of documents of collection
        //         .then(results => { // when resolved render index.ejs with results as userCollections
        //             res.render('index.ejs', {usersCollection: results});
        //         }) // error handling
        //         .catch(error => console.error(error));
        // });

        // handle get request with prisma
        app.get('/', async(req, res) => {
            const body = { users: null, posts: null };

            const users = await prisma.user
                .findMany()
                .then(results => {
                    body.users = results;
                })
                .catch(error => console.error(error));

            const posts = await prisma.post
                .findMany()
                .then(results => {
                    body.posts = results;
                })
                .catch(error => console.error(error));

            res.render('index.ejs', {body: body});
        })

        // handle post requests at 'users'
        // app.post('/users', (req, res) => {
        //     usersCollection
        //         .insertOne(req.body) // insert the request body into collection
        //         .then(result => { // if inser successful redirect to root
        //             res.redirect('/');
        //         }) // error handling
        //         .catch(error => console.log(error));
        // });

        // handle put request at 'users'
        app.put('/users', async(req, res) => {
            usersCollection
                .findOneAndUpdate(
                    { username: req.body.username },
                    {
                        $set: {
                            username: req.body.username,
                            password: req.body.password,
                        },
                    },
                    {
                        upsert: false,
                    },
                    {
                        returnNewDocument: true
                    }
                )
                .then(result => {
                    res.json('Success');
                    return res;
                })
                .catch(error => console.error(error));
        });

        // handle delete requests
        app.delete('/users', async(req, res) => {
            usersCollection
                .deleteOne(
                    { username: req.body.username }
                )
                .then(result => {
                    console.log(`Deleted ${req.body.username}`);
                    console.log(result);
                    res.json('Deleted user');
                })
                .catch(error => console.error(error));
        })
    })
    .catch(error => console.error(error));

// listen for connection to port 3000
app.listen(PORT, function () {
    console.log(`Server is live! Listening at port ${PORT}`);
});