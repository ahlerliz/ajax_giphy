"use strict";

const GIPHYAPI = 'http://api.giphy.com/v1/gifs/search';
const APIKEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

console.log("Let's get this party started!");


/**
 * returns the search term from form
 */
function getFormValue() {
    return $("#giphyInput").val();
}

/**
 * takes search term from user and extracts URL from giphy via AJAX request
 */
async function requestAjaxSearchTerm(searchTerm) {
    let response = await axios.get(GIPHYAPI, { params: { q: searchTerm, api_key: APIKEY } });
    //let responseToObject = JSON.parse(response);
    let embedUrl = response.data.data[0].images.original.url;
    console.log('response: ', response);
    console.log("response data", embedUrl);
    return embedUrl;
}

/**
 * takes the giphy URL and appends it in an image to DOM 
 */

function showGiphy(embedUrl) {
    // $('#giphyBody').append(`<img src="${embedUrl}"></img>`);
    const newImage = $('<img/>').attr("src",embedUrl);
    $('#giphyBody').append(newImage);
}


/**
 * removes all giphys from page
 */

function emptyGiphyBody() {
    $("#giphyBody").empty();
}
$("#removeButton").on("click", emptyGiphyBody);



//Break the function on event listener out and call it in line 50

$("#searchForm").on("submit", async function (e) {
    // get the value of the giphy input
    e.preventDefault();
    // take that input and use ajax to search taht string on giphy site
    // that's going to give us a response that we then need to append the response to the page (likely a piece of data within response)
    // pass that to 
    let searchTerm = getFormValue();
    let embedUrl = await requestAjaxSearchTerm(searchTerm);
    showGiphy(embedUrl);
})