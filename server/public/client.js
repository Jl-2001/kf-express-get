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
            'got data from',
            // the actual data lives in the response.data 
            response.data
            //response
        )
        let quotes = response.data
        renderToDOM(quotes)
    })
    .catch((error) => {
        console.log(error)
        alert('something went wrong')
    })
}
getQuotes()






function addQuote(event) {
    event.preventDefault();

    // we access an input fields input via its value property
    let quote = document.querySelector('#quoteContent').value
    let author = document.querySelector('#authorContent').value
    console.log('inputs: ', quote, author)

    let quoteToAdd = {
        text: quote,
        author: author
    }

    axios
    .post('/quotes', quoteToAdd)
    .then((response) => {
        console.log('successful POST to /quotes', quoteToAdd)

        // clear out the input fields
        document.querySelector("#quoteContent").value = ''
        document.querySelector("#authorContent").value = ''
        getQuotes()
    })
    .catch((error) => {
        console.log('error in POST to /quotes', error);
})
}

// axios will call the endpoint, wait for the response, thats what .then means
//Axios lets us call from the front end.


//render means i want to show data on the dom,
// so we will render data on the dom

//to show data on the dom, we use dom = render
// in index.html, we will need to create something
// that will have an id

//in index html ill need to create something 
// the thing will need to have an id
// some piece of daataa needs too get appended

function renderToDOM(quotes) {
    let contentDiv = document.querySelector('#content')
    contentDiv.innerHTML = ''
    for (let quote of quotes) {
        contentDiv.innerHTML += `
        <p> "${quote.text}" -${quote.author}</p>
        `
    }
    console.log('in renderToDOM')
}


// we get id with a hashtag when we use queryselector