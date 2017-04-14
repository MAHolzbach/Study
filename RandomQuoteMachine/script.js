$(document).ready(function() {
  $('#getMessage').on('click', function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json", function(json) {
      var quotation = json.quoteText;
      var author = json.quoteAuthor;
      $('.quote').html('"' + quotation + '"' + '</br>' + '-' + author);
    });
  });
});
