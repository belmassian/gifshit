
var memes=["Kermit the Frog", "Honey Badger", "What Does the Fox Say", "Doge","Ice Bucket Challenge"];
function displayMemeInfo() {
  var meme = $(this).attr("data-meme");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + meme + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response){
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
function renderButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < memes.length; i++) {
    var a = $("<button>");
    a.addClass("meme");
    a.attr("data-meme", memes[i]);
    a.text(memes[i]);
    $("#buttons-view").append(a);
  }
}
$("#add-meme").on("click", function(event) {
    event.preventDefault();
    var meme2 = $("#memes-input").val().trim();
      memes.push(meme2);
      renderButtons();
    });
  $(document).on("click", ".meme", displayMemeInfo);
  renderButtons();
};
$(".gif").on("click", function() {
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
