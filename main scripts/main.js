$(document).ready(()=> {
    $(".image-container").hover(()=> {
      var text = $(this).data("text");
      $(this).find("img").hide();
      $(this).find(".hidden-text").text(text).show();
    }, ()=> {
      $(this).find("img").show();
      $(this).find(".hidden-text").hide();
    });
  });