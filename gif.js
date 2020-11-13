document.addEventListener('DOMContentLoaded', (ev) => {
    ev.preventDefault();
    // get element where gifs will be posted:
    let gifsLocation = document.getElementById('gifs')
    // get search input
    let formInput = document.getElementById('inputvalue');

    function addGif(response) {
        //loop through the search term results and pick a gif at random
        //create a new div element, create a new img element
        //append the new div to the UL and then append the img to the div
        let numResults = response.data.length;

        if (numResults > 0) {
            let randInd = Math.floor(Math.random() * numResults);
            //create a new div element to add to the DOM in the 
            //div with #gifs id
            let newDiv = document.createElement('DIV');
            //create a new gif image element
            let newGif = document.createElement('IMG');
            //set the source of the new IMG element, from the API
            newGif.setAttribute('src', response.data[randInd].images.original.url);
            // add the new div to the gifs container
            newDiv.appendChild(gifsLocation);
            // add the new gif to the newDiv
            newGif.appendChild(newDiv);
        }
    }

    //pick the submit form
    let theForm = document.getElementById('giphy');
    
    // add event listener on form submission with async callback function
    // prevent default behaviour of page refresh
    theForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        // the GET search term is set to the form input's value, then 
        // set to an empty string to clear it once you've clicked submit
        let searchTerm = formInput.value;
        formInput.value = '';

        //promise to get data from the API via the search term and the 
        //API_key provided.         
        const response = await axios.get('http://api.giphy.com/v1/gifs/search', { 
            params: {
                q: searchTerm,
                api_key : "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        });

        //call the addGif function with the data from the response.
        addGif(response.data);
    })

    // let remove = document.getElementById('remove');
    // remove.addEventListener('click', function () {
    // gifsLocation.target.parentNode.remove();
});



