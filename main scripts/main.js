$(document).ready(function() {
    $(".image-container").hover(function() {
      var text = $(this).data("text");
      $(this).find("img").hide();
      $(this).find(".hidden-text").text(text).show();
    }, function() {
      $(this).find("img").show();
      $(this).find(".hidden-text").hide();
    });
  });