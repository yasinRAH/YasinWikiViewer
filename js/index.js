//random search: https://en.wikipedia.org/wiki/Special:Random

$(document).ready(function() {

  var images = [
    "https://static.pexels.com/photos/6763/light-love-clouds-river.jpg",
    "https://static.pexels.com/photos/7307/pexels-photo.jpeg", "https://upload.wikimedia.org/wikipedia/commons/e/e1/USA_10279_Monument_Valley_Luca_Galuzzi_2007.jpg",
    "https://static.pexels.com/photos/46274/pexels-photo-46274.jpeg",
    "https://static.pexels.com/photos/296115/pexels-photo-296115.jpeg"
  ];

  function background() {
    var bg = images[Math.floor(Math.random() * images.length)];
    $("body").css("background-image", 'url(' + bg + ')');
  }

  background();

  $("#submitButton").on("click", function() {

    var search = $("#searchTerm").val();
    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + search;

    function wiki() {
      $.ajax({
        type: "GET",
        url: wikiUrl,
        dataType: "jsonp",
        success: function(data) {
          console.log(wikiUrl);

          $("#output").children().fadeOut();

          $("#logo").animate({
            "margin-top": "0",
            "margin-bottom": "0",
            "height": "hide"
          }, 400);

          for (var i = 0; i < data[1].length; i++) {
            $("#output").append("<a class=\"searchLink\" target=\"blank\" href=" + "\"" + data[3][i] + "\">" + "<li class=\"list-group-item\">" + "<b>" + data[1][i] + "</b>" + "<br>" + data[2][i] + "</li></a>");
          }
        }
      });
    }

    wiki();
  });

});