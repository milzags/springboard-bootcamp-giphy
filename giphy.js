// listen for a click on button with id getGifs
// get the value of the text in the form
// create new LI, set the properties of the LI based on the form value
// 

const ul = document.getElementById('#gifs');
const searchForm = document.getElementById('#description');

async function getGifs() {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, { params: 
        { q: search, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' } });

    console.log(res);
}

function addGif(res) {
    //get number of results (array)
    //select a random index from the number of results
    // create a new LI, append to UL#gifs
    // create a new IMG, append to LI

}








const btnOne = document.querySelector('#getGifs');
btnOne.addEventListener('click', getGifs);

const btnTwo = document.querySelector('#remove');
btnTwo.addEventListener('click', (ev) => {
    ev.preventDefault();
    // get the id of the LIs
    // remove all LI
})