function output(data) {
	var output = document.getElementById('quoteRandom')
	var output1 = document.getElementById('quoteAuthor')
	output.innerHTML = `"${data.quoteText}"`;
	output1.innerHTML = data.quoteAuthor;
	
 }



$(document).ready(function() {
  $(".button").on("click", function() {
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=output'
    	

    	});
    
  	});
  $(".tweet").on("click", function() {
    	window.open("https://twitter.com/intent/tweet")
    });
});

