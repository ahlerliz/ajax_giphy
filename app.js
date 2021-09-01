"use strict";

const GIPHYAPI = 'http://api.giphy.com/v1/gifs/search';
const APIKEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

console.log("Let's get this party started!");

function getFormValue(){
    return $("#giphyInput").val();
}

function showGiphy(responseToObject){
    $('#giphyBody').append(`<img src="${responseToObject}"></img>`);
}

async function requestAjaxSearchTerm(searchTerm){
    let response = await axios.get(GIPHYAPI,{params: {q: searchTerm, api_key: APIKEY}});
    //let responseToObject = JSON.parse(response);
    let embedUrl = response.data.data[0].images.original.url
    console.log('response: ', response);
    console.log("response data", embedUrl);
    showGiphy(embedUrl);
}


$("#searchForm").on("submit", function(e){
    // get the value of the giphy input
    // e.preventDefault();
    let searchTerm = getFormValue();
    requestAjaxSearchTerm(searchTerm);
    // take that input and use ajax to search taht string on giphy site
    // that's going to give us a response that we then need to append the response to the page (likely a piece of data within response)
    // pass that to 
})