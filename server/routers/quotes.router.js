// each router file will deal with the quotes
//WORKING ON HTTP REQUEST
//LIKE GET REQUEST AND POST REQUEST
//CREATE AN ENDPOINT TO GET THE QUOTES
// the first argument to app.get is the name of the route
// the secoond, is an anonymous function
// arrow function syntax is () => {}, params go insiddee the ()


//HTTTP request inludes
//get
//post
// we will need to add some boilerplate to get this plumbing aligned again
const express = require('express');
const router = express.Router();
const quoteList = require('../modules/quotes');

// we will have acces to this router via this variable 





// WHEN OUR ROUTES LIVE IN OUR ROUTER, WE WILL USE ROUTER.GET/post/delete INSTEAD, OR APP.GET. ETC..
router.get('/', (req,res) => {
    console.log('get request successful')
    //use when you want to get info
    //res.send sends a payload
    res.send(quoteList)
    // res.sendStatus(404)
  })
  

  // this is also an api, built an infrastructure
router.post('/', (req,res) => {
    console.log(
      'POST to /quotes success! body: ', 
      req.body
    )
    // req.body Is where from the data sent in the request lives
    let quote = req.body
    // we have a quotelist that lives on the backend
    // take the req.bidy and save it in the array
    // we will push the array 
    console.log('adding new quote:' ,quote)
    quoteList.push(quote)
    console.log('new array is', quoteList)
    res.sendStatus(201)
  })



//  then we will need to export the router File, like the quotelist
// we will need module.exports
module.exports = router;