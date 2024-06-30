console.log("Let's get this party started!");

//returns an array of gifs based on the search term
async function getGif(term) {
    let searchTerm = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    let response = await axios.get(searchTerm);
    let data = response.data.data;

    return data;
}
$(document).ready(function() {
    //when search is clicked, call the getGif function to generate a random gif
    //place that gif on the body
    $("#search").click(async function() {
        var gifArray = await getGif($("#term").val());

        if (gifArray.length > 0) {
            let randGifUrl = gifArray[
                Math.floor(Math.random() * gifArray.length)
            ].images.fixed_height.url;
            $("#gif-div").append($("<img>")
                .attr('src', randGifUrl)
                .attr('class', "meme"));
        }
        else{
            console.log("No GIFs Found.")
        }
   
    });
    //when the remove button is clicked, remove all memes
    $("#remove").click(function() {
        $(".meme").remove();
    });
})