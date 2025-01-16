// Require express - gives us a function
// we will import quotes router
// and we wil USE the quote router
let quotesRouter = require('./routers/quotes.router')

const express = require("express");

// let quoteList = 

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5001;

//we will put routes into their own routers.
// routers will have the quotes stay there

// express static file serving - public is the folder name
app.use(express.static("server/public"));
// we also need to app.use any routers that we use
// we provide the route in quotes and the actual router file
app.use(express.json())


app.use('/quotes', quotesRouter) 


// if we are POSTing data, we need to use this bioler plate
// javascript object notation
//serialization, deserialization


// Start up our server
app.listen(port, () => {
  console.log("listening on port", port);
});

//modularization means breaking up our code into digestible, easy to understand pieces
// isolated pieces
//single responsibility principle
//we should break up our code into small piees which each handle their own specific 
//functionalities







