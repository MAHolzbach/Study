$(document).ready(function() {
  var quotation;
  var author;
  $('#getMessage').on('click', function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json", function(json) {
      quotation = json.quoteText;
      author = json.quoteAuthor;
      $('.quote').html('"' + quotation + '"' + '</br>' + '-' + author);
    });
  });

  $('.shareQuote').on('click', function(event){
    event.preventDefault();
    if(quotation || author) {
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotation + '-' +  author));
    } else {
      return;
    }
  });
});
