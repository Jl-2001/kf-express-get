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
let quoteList = require('../modules/quotes');

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




router.delete('/:id', (req,res) => {
    console.log('DELETE REQUEST SUCCESFUL')
    // Number is a contructor method
    let id = Number(req.params.id)
    console.log('req.param is :', id)
    function deleteBody(quote, i) {
        // item checks each time in the array
        if(i === (id)) {
            return false
        } 
        return true
    }
    quoteList = quoteList.filter(deleteBody)
    console.log(' the quote list deleted was', quoteList)
    // function deleteQuotes(quote, i) {
    // // does this quote have the id that i want to delete?
    // // if yes, im gonna delete if, ifno, im gonna keep it
    // // req.params is always a string
    // if(i === (id)) {
    //     return false
    // }
    // return true
    // }
    // quoteList= quoteList.filter(deleteQuotes)
    // console.log(quoteList)
    // // a common way to send back a status of deleted is 204
    res.sendStatus(204)
})  
// we will see a :id
// example: localhostL5001/quotes/:id (this will be treated as data)
// no we will beed to delete a quote based on the id number
// maybe we can use a filter?




//  then we will need to export the router File, like the quotelist
// we will need module.exports
module.exports = router;