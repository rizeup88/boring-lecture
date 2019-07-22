$(document).ready(function() {
  $(".clickable").click(function() {
    $("#highlight").removeClass().toggle();
    $("#highlight").addClass("yellow-background").toggle();
  });
});