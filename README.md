# My CRUD Application
## Server.js
---
### About
This project serves as my introduction to CRUD projects. 

1. The first step completed in our project was to ensure when a client requested data through a GET request to the root path '/', our server would return a response in the form of a file to our landing page index.html.

2. In the POST iteration we ensure our client can create data through a POST request using a form in our index.html page. We added a form with two inputs of type text. Our form also contains a submission button which triggers a POST request to path '/users'. The data in the input texts are sent to the server side as key:value pairs. The request body received on the server side is logged to the console.

3. In the MongoDB iteration we connected our application to a MongoDB server. Our appliaction now has MongoDB utility.

4. In the Server.js iteration we set up HTTP request to effectively communicate with our database. Our server.js file now connects to our MongoDB client and checks for GET requests to the root '/' and POST requests to '/users'. 
 Our index.html changed to an index.ejs so we could more easily display how the collection in our database was changing. The difference between this file and index.html is that this file now dynamically adds documents from our users collection that are stored in our database. It also allows us to iterate through an array and list our documents using JavaScript. EJS means Embedded JavaScript which is what allows us to more easily manipulate our data to make our web page more dynamic. 

 GET requests now check for the users collection in our MongoDB database to update our index.ejs render. It retrieves the documents in the users collection and renders the index.ejs page with the users collection as an argument. 
 
 The key-value pair of 'username: password' sent through a POST is handled in server.js and added to the MongoDB users collection instead of logging to the console. server.js then redirects to the root path. 

### Technologies
- **IDE**: VSCode
- **Markup Languages**: HTML, Markdown
- **Programming Languages**: JavaScript
- **Runtime Environment**: Node.js
- **WebApp Framework**: Express
- **Version Control System**: Github
- **Terminal**: powershell
- **Database**: MongoDB

### Getting Started
My appliaction has two static files at the moment, index.html and server.js. 
- **server.js**: Listens into port 3000 for any connections. Connects our application to our MongoDB client. Routes HTTP GET requests of root endpoint '/' to our index.ejs file. Users from the users collection are retrieved and rendered to index.ejs with the GET request. HTTP POST requests to root endpoint '/users' are received here and uploaded to our MongoDB database in the users collection. Then the application is redirected back to the root '/'. 
- **index.ejs**: HTML page with Embedded JavaScript to enable dynamic interaction with our webpage through a form. index.ejs returns when there is a GET request to the root endpoint '/'. It pulls from our MongoDB server to post users information to the web page in list form. It has a form with two inputs of type text and a button. The button triggers a POST request to path '/users'. The data in the input texts are sent to the server side as key:value pairs. The request body received on the server side is used to create new users on our MongoDB database in the users collection.  

### Installation
1. Make a directory to clone this repository into\
`C:PATH\ mkdir CRUD`
2. Move into directory\
`C:PATH\ cd CRUD`
3. Clone repository\
`C:PATH\CRUD git clone https://github.com/santi-jose/CRUD.git`
4. Start the server\
`C:PATH\CRUD npm start`
5. Go to [port 3000](http://localhost:3000/) to view the landing page! Here you can input a fake username and password to test the functionality of our GET and POST requests and how they get stored into our database and then read from our database to populate in list format on our web page. 
