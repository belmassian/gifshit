$("button").on("click", function(){
  var meme =$(this).attr("data-meme");
  var queryURL ="http://api.giphy.com/v1/gifs/search?q=" +
      meme + "&api_key=dc6zaTOxFJmzC&limit=10";
      $.ajax({
        url:queryURL,
        method:"GET"
      })
      .done(function(response){
        var results=response.data;
        for (var i=0; i<results.length;i++){
          var memeDiv = $("<div class='item'>");
          var p=$("<p>").text("Rating:"+results[i].rating);
          var memeimg = $("<img>");
          memeimg.attr("src",results[i].images.fixed_height.url);
          memeDiv.append(p);
          memeDiv.append(memeimg);
          $("#gifs-appear-here").prepend(memeDiv);
    }
  });
});
