// listen for a click on button with id getGifs
// get the value of the text in the form
// create new LI, set the properties of the LI based on the form value
// 

// getElement where gif will be placed
// const ul = document.getElementById('#gifs');
// // get element where the search term is entered
// const searchForm = document.getElementById('#inputvalue');

// if (searchForm) {
// searchForm.addEventListener('submit', async function(event) {
//     event.preventDefault();
//     console.log(searchForm.value)
    // const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, { params: 
    //     { q: search, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' } });
    //     //pass argument to function via value in the form    
    //     //to make a request for /resource?a=1&b=2 {params {a: 1, b: 2}}
    // console.log(res);
//     });
// }


// function addGif(res) {
//     //get number of results (array)
//     //select a random index from the number of results
//     // create a new LI, append to UL#gifs
//     // create a new IMG, append to LI

// }




// const btnOne = document.querySelector('#getGifs');
// btnOne.addEventListener('click', (event) => {
//     event.preventDefault();
// });


// const btnTwo = document.querySelector('#remove');
// btnTwo.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     // get the id of the LIs
//     // remove all LI
// })

async function checkAPI() {
    const response = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym');
    console.log(response);
}