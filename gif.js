document.addEventListener('DOMContentLoaded', (ev) => {
    ev.preventDefault();
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
            //create a new div element to add to the DOM in the 
            //div with #gifs id
            let newDiv = document.createElement('DIV');
            //create a new gif image element
            let newGif = document.createElement('IMG');
            //set the source of the new IMG element, from the API
            newGif.setAttribute('src', response.data[randInd].images.original.url);
            // add the new div to the gifs container
            newDiv.append(gifsLocation);
            // add the new gif to the newDiv
            newGif.append(newDiv);
        }
    }

    let theForm = document.getElementById('inputvalue');
    

    theForm.addEventListener('submit', async function(event) {
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

    let remove = document.getElementById('remove');
    remove.addEventListener('click', function () {
    gifsLocation.target.parentNode.remove();
    })


});


