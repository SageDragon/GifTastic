$(document).ready(function(){

    var searches = ["Kitties", "Puppies", "Splat", "OMG"];

    function makeButtons() {

    $(".buttonList").empty();
    for (var i = 0; i < searches.length; i++) {

        var b = $("<button>");
        b.addClass("m-2 btn btn-info");
        b.attr("data-name", searches[i]);
        b.text(searches[i]);
        $(".buttonList").append(b);
    }};
    
    $(".addButton").on("click", function(event) {
        
        event.preventDefault();
        var newButton = $("#nextButton").val().trim();
        searches.push(newButton);
        makeButtons();
    });
    makeButtons();


});