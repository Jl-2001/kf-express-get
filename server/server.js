// Require express - gives us a function
const express = require("express");

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5001;

// express static file serving - public is the folder name
app.use(express.static("server/public"));

// if we are POSTing data, we need to use this bioler plate
// javascript object notation
//serialization, deserialization
app.use(express.json())

// Start up our server
app.listen(port, () => {
  console.log("listening on port", port);
});

//objects use key value parts
let quoteList = [
  { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
  { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
  { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];


//WORKING ON HTTP REQUEST
//LIKE GET REQUEST AND POST REQUEST
//CREATE AN ENDPOINT TO GET THE QUOTES
// the first argument to app.get is the name of the route
// the secoond, is an anonymous function
// arrow function syntax is () => {}, params go insiddee the ()
app.get('/quotes', (req,res) => {
  console.log('get request successful')
  //use when you want to get info
  //res.send sends a payload
  res.send(quoteList)
  // res.sendStatus(404)
})

// this is also an api, built an infrastructure
app.post('/quotes', (req,res) => {
  console.log('POST to /quotes success')
  res.sendStatus(201)
})





