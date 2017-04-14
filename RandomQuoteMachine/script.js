$(document).ready(function() {
    $('#getMessage').on('click', function(){
      console.log('clicked');
      $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json", function(json) {
        console.log(json);
        $('.talk').html(JSON.stringify(json));
        });
        // var html = '';
        // Object.keys(json).forEach(function(val){
        //   var data = json[val];
        //   html += "<div class = 'quote'>";
        //   data.forEach(function(item){
        //     html += "<p>" + val.item + val.item + "<p>";
        //   });
        //   html += "</div>";
        // });
        // $('.talk').html(html);

      });
    });
