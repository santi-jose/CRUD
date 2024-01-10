# My CRUD Application
## Create
---
### About
This project serves as my introduction to CRUD projects. The previous step completed in our project was to ensure when a client requested data through a GET request to the root path '/', our server would return a response in the form of a file to our landing page index.html.\ 

In this POST iteration we ensure our client can create data through a POST request using a form in our index.html page. We added a form with two inputs of type text. Our form also contains a submission button which triggers a POST request to path '/users'. The data in the input texts are sent to the server side as key:value pairs. The request body received on the server side is logged to the console.

 ### Technologies
- **IDE**: VSCode
- **Markup Languages**: HTML, Markdown
- **Programming Languages**: JavaScript
- **Runtime Environment**: Node.js
- **WebApp Framework**: Express
- **Version Control System**: Github
- **Terminal**: powershell

### Getting Started
My appliaction has two static files at the moment, index.html and server.js. 
- **server.js**: Listens into port 3000 for any connections. Routes HTTP GET requests to root endpoint '/' to our index.html file. HTTP POST requests to root endpoint 'users' are received and logged to the console. 
- **index.html**: HTML page which returns when there is a GET request to the root endpoint '/'. It has a form with two inputs of type text and a button. The button triggers a POST request to path '/users'. The data in the input texts are sent to the server side as key:value pairs. The request body received on the server side is logged to the console.  

### Installation
1. Make a directory to clone this repository into\
`C:PATH\ mkdir CRUD`
2. Move into directory\
`C:PATH\ cd CRUD`
3. Clone repository\
`C:PATH\CRUD git clone https://github.com/santi-jose/CRUD.git`
4. Start the server\
`C:PATH\CRUD npm start`
5. Go to [port 3000](http://localhost:3000/) to view the landing page! Here you can input a fake username and password to test the functionality of our GET and POST requests. 
