# My CRUD Application
## Prisma
---
### About
This project serves as my introduction to CRUD projects. 

1. The first step completed in our project was to ensure when a client requests data through a GET request to the root path '/', our server would return a response in the form of a file to our landing page index.html.

2. In the POST iteration we ensure our client can create data through a POST request using a form in our index.html page. We added a form with two inputs of type text. Our form also contains a submission button which triggers a POST request to path '/users'. The data in the input texts are sent to the server side as key:value pairs. The request body received on the server side is logged to the console.

3. In the MongoDB iteration we connected our application to a MongoDB server. Our appliaction now has MongoDB utility.

4. In the Server.js iteration we set up HTTP request to effectively communicate with our database. Our server.js file now connects to our MongoDB client and checks for GET requests to the root '/' and POST requests to '/users'. 

    Our index.html changed to an index.ejs so we could more easily display how the collection in our database was changing. The difference between this file and index.html is that this file now dynamically adds documents from our users collection that are stored in our database. It also allows us to iterate through an array and list our documents using JavaScript. EJS means Embedded JavaScript which is what allows us to more easily manipulate our data to make our web page more dynamic. 

    GET requests now check for the users collection in our MongoDB database to update our index.ejs render. It retrieves the documents in the users collection and renders the index.ejs page with the users collection as an argument. 
 
    The key-value pair of 'username: password' sent through a POST is handled in server.js and added to the MongoDB users collection instead of logging to the console. server.js then redirects to the root path. 

5. In the Update iteration, we add the update functionality to our CRUD web application. We can now update existing users passwords through the update-button. We added a main.js script to make a PUT request when the update-button is pressed. The server.js file then takes the request body and updates the MongoDB collection associated with the input username. 

6. In the Delete iteration, we add the delete functionality to our CRUD web application. We can now delete a user from our collection when given a username in the input text and clicking on the new delete button. We added a request via fetch to make a DELETE request when the delete-button is pressed. The server.js file then takes the request body and queries for the input username. If the username exists, it is deleted from our MongoDB colelction.

7. In the Prisma iteration we added the ORM, Prisma, to our CRUD application. Prisma serves to organize our data in our database. We now use models, defined in our schema.prisma file, to describe our User and Post documents. User documents consist of a username and password, whiole Post documents consist of a title and body. We added a new form element in our index.ejs consisting of text input elements and a submit button to send POST requests on the client side to create Post documents in our database. These requests are routed to the endpoint '/posts'. We also added to our index.ejs to render the posts added to our MongoDB database. We added new POST responses for requests to '/users' and '/posts' endpoints through the root index.ejs file. The new responses use Prisma to create documents on the server side when we receive a request at either endpoint. Now we can POST new User and Post documents through our web app using Prisma. 

### Technologies
- **IDE**: VSCode
- **Markup Languages**: HTML, Markdown
- **Programming Languages**: JavaScript
- **Runtime Environment**: Node.js
- **WebApp Framework**: Express
- **Version Control System**: Github
- **Terminal**: powershell
- **Database**: MongoDB
- **ORM**: Prisma

### Getting Started
The important files in this project are index.ejs, server.js, main.js and schema.prisma.
- **index.ejs**: HTML page with Embedded JavaScript to enable dynamic interaction with our webpage through two forms. index.ejs returns when there is a GET request to the root endpoint '/'. It pulls from our MongoDB server to post User and Post information to the web page in list form. The User form has two inputs of type text and three buttons. The submit-button triggers a POST request to path '/users'. The update-button triggers a PUT request to path'/users'. The delete-button triggers a DELETE request to path '/users'. The data in the input texts are sent to the server side as key:value pairs. The request body received on the server side is used to create new users, update the password of existing users, or delete users from our MongoDB database in the users collection. 
The Post form has two text inputs for the title and body of a Post, as well as a Submit button to make a POST request to endpoint '/posts.'. Underneath this form the posts in the Post collection are rendered in index.ejs. 
- **server.js**: Listens into port 3000 for any connections. Connects our application to our MongoDB client. Routes HTTP GET requests of root endpoint '/' to our index.ejs file. Users from the User collection and posts from the Post collection are retrieved and rendered to index.ejs with the GET request. HTTP POST requests to endpoint '/users' and '/posts' are triggered through their respective submit buttons and received here to upload new User and Post documents to our MongoDB database. Then the application is redirected back to the root '/'. HTTP PUT requests to endpoint '/users' are received in server.js through the update-button via an event listener added in main.js. The server updates the user information as requested. HTTP DELETE requests to endpoint '/users' are received in server.js through the delete button via an event listener added in main.js. The server deletes the user as requested.  
- **main.js**: A JavaScript file which is linked in our index.ejs file to send PUT and DELETE requests from our client to our server. Adds an event listener to our update-button and delete-button. PUT request contains a body with our username and password input text from our form in index.ejs.The DELETE request contains a body with the username of the user we want to delete from our collection. On resolution of our fetch request, we return the result and we reload our webpage so the list of users in our database is updated on our root webpage.
- **schema.prisma**: A prisma file where we define the schemas for our documents in our database. Here we defined our User and Post documents to include certain data relevant to each document. We also use this file to define how we generate our prisma client. We also define how we want to connect to our database through prisma here. 

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
