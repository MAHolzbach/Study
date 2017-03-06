$("#riverInfoButton").click(function() {
  $(".thumbnail").animate({
    opacity: 0
  }, 1000, function() {
    $("#riverInfo").animate({
      opacity: 1
    }, 1000);
  });
});
