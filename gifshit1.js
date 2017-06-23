$("button").on("click", function(){
  var gifrequest=$(this).attr.("data-giphy");
  var queryURL ="http://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";
      $ajax({
        url:queryURL,
        method:"GET"
  });
  .done(function(response){
    var imageURL=response.data;
    for (var i=0; i<results.length;i++){
      var gifDiv = $("<div>");
      var p=$("<p>").text("Rating:"+results[i].rating);
      var giphyimg = $(<"img">);
      giphyimg.attr("src",results[i].images.fixed.height.url);
      gifDiv.append(p);
      gifDiv.append(giphyimg);
      $("#gifs-appear-here").prepend(gifDiv);
    }
    $(".gif").on("click", function() {
      var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});
});
