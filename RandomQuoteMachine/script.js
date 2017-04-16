$(document).ready(function() {

  var quotation;
  var author;

  function newQuote() {
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
       quotation = json.quote;
       author = json.author;
      $('.quote').html('"' + quotation + '"' + '</br>' + '-' + author);
    });
  }

  $('#getMessage').on('click', function(event) {
    event.preventDefault();
    newQuote();
  });

  newQuote();

  $('.shareQuote').on('click', function(event){
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quotation + '-' +  author));
  });
});
