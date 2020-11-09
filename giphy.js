// listen for a click on button with id getGifs
// get the value of the text in the form
// create new LI, set the properties of the LI based on the form value
// 

async function getGifs() {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, { params: 
        { q: search, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' } });

    console.log(res);
}










const btnOne = document.querySelector('#getGifs');
btnOne.addEventListener('click', getGifs);

const btnTwo = document.querySelector('#remove');
btnTwo.addEventListener('click', (ev) => {
    ev.preventDefault();
    // get the id of the LIs
    // remove all LI
})