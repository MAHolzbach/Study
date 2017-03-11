$("#riverInfoButton").click(function() {
  $(".thumbnail").hide("drop", {direction: "down"}, 500, function() {
    $("#riverInfo").show("fade", 500);
  });
});

$("#riverInfo").click(function() {
  $(this).hide("fade", 500, function() {
    $(".thumbnail").show("fade", 500);
  });
});
