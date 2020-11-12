document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    // get element where gifs will be posted:
    let gifsLocation = document.getElementById('gifs')
    // get search input
    let formInput = document.querySelector('#inputvalue');

    function addGif(response) {
        //loop through the search term results and pick a gif at random
        //create a new div element, create a new img element
        //append the new div to the UL and then append the img to the div
        let numResults = response.data.length;
        if (numResults > 0) {
            let randInd = Math.floor(Math.random() * numResults);
            let newDiv = document.createElement('div');
            let newGif = document.createElement('img');
            newGif.setAttribute('src', res.data[randInd].images.original.url);
            newDiv.append(gifsLocation);
            newGif.append(newDiv);
        }
    }

    let theForm = document.getElementById('gifsearch');

    theForm.addEventListener('click', async  function(event) {
        event.preventDefault();
        let searchTerm = formInput.value;
        formInput.value = '';

        const response = await axios.get('http://api.giphy.com/v1/gifs/search', { 
            params: {
                q: searchTerm,
                api_key : "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        });
        addGif(response.data);
    })


});

// pick the div where the figs will be stored
//pick the search input via querySelector
