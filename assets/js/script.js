$(document).ready(function(){

    var searches = ["Kitties", "Puppies", "Splat", "OMG"];

    function trackButton() {
        $("button").on("click", function() {

        var page = $(this).attr("page")
        console.log(page)

        $(".info").text("Click your search button again for more results. Click on the Image to toggle the animation.")
        var gifKeyword = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifKeyword + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10" + "&offset=" + page;

        
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

          console.log(queryURL);            
          console.log(response);

          var results = response.data;
          var still = "still"


          for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div class='card'>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var gifImage = $("<img>");

            gifImage.attr("src", results[i].images.fixed_width_still.url);
            gifImage.attr("fixed", results[i].images.fixed_width_still.url);
            gifImage.attr("animate", results[i].images.fixed_width.url);
            gifImage.attr("state", still);

            gifDiv.append(p);
            gifDiv.append(gifImage);

            $(".gifList").prepend(gifDiv);
          }

          $("img").on("click", function() {

            var state = $(this).attr("state");

            if (state === "still") {
              $(this).attr("src", $(this).attr("animate"));
              $(this).attr("state", "animate");
            } else {
              $(this).attr("src", $(this).attr("fixed"));
              $(this).attr("state", "still");
            }
          });
    
        });
        var pageNumb = parseInt(page);
        pageNumb += 10
        $(this).attr("page", pageNumb)
        console.log(typeof pageNumb)
        console.log(this)

    });

    }

    function makeButtons() {

    $(".buttonList").empty();
    for (var i = 0; i < searches.length; i++) {

        var b = $("<button>");
        b.addClass("m-2 btn btn-info");
        b.attr("data-name", searches[i]);
        b.attr("page", 0)
        b.text(searches[i]);
        $(".buttonList").append(b);
    }};
    
    $(".addButton").on("click", function(event) {
        
        event.preventDefault();
        var newButton = $("#nextButton").val().trim();
        searches.push(newButton);
        makeButtons();
        trackButton();

    });

  

    makeButtons();
    trackButton();
    


});

