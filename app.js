"use strict";

console.log("Let's get this party started!");

function getFormValue(){
    return $("#giphyInput").val();
}

function showGiphy(response){
    $('#giphyBody').append(`<img src="${response}"></img>`);
}

async function requestAjaxSearchTerm(searchTerm){
    let api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
    let response = await axios.get('http://api.giphy.com/v1/gifs/search',{params: {search: searchTerm, api_key}}).data.embed_url;
    console.log('response: ', response);
    showGiphy(response);
}


$("#searchForm").on("submit", function(e){
    // get the value of the giphy input
    e.preventDefault();
    let searchTerm = getFormValue();
    requestAjaxSearchTerm(searchTerm);
    // take that input and use ajax to search taht string on giphy site
    // that's going to give us a response that we then need to append the response to the page (likely a piece of data within response)
    // pass that to 
})