console.log("hello world");

//Axios lives on the client side, 
//It allows us to make requests to our server from our client

//button click
// we can make a request to the back end using a function

function getQuotes() {
    // we want s function that gets quotes from the server using axios
    // we want to use axios inside this function
    //we are chaining axios methods here
    // first we reach out to the endpoint
    // then we wait for a response, and we do something 
    // .then handles the succesful case, where we got data
    //.catch handles the failure case
    axios
    .get('/quotes')
    .then((response) => {
        console.log(
            // the actual data lives in the response.data 
            response.data
            //response
        )
        let quotesFromServer = response.data
        renderToDOM(quotesFromServer)
    })
    .catch((error) => {
        console.log(error)
        alert('something went wrong')
    })
    console.log('in quotes function')
}
getQuotes()

// axios will call the endpoint, wait for the response, thats what .then means
//Axios lets us call from the front end.


//render means i want to show data on the dom,
// so we will render data on the dom


//in index html ill need to create something 
// the thing will need to have an id
// some piece of daataa needs too get appended

function renderToDOM(quotes) {
    let contentDiv = 
        document.querySelector('#content')
    contentDiv.innerHTML = ''
    for (let quote of quotes) {
        contentDiv.innerHTML += `
        <p> "${quote.text}" -${quote.author}</p>
        `
    }

    console.log('in renderToDOM')
}
// we get id with a hashtag when we use queryselector