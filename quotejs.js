var display = document.getElementById("quote-display");
var btn = document.getElementById("newquote");

//Get JSON data upon clicking quote generating button 
btn.addEventListener("click", function(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://quotes.stormconsultancy.co.uk/quotes.json');
  request.onload = function(){
    var data = JSON.parse(request.responseText);
    renderHTML(data);
  }
  request.send();
});

//Create global object quote to be used in tweet later 
var tweetquote; 

//Function to display JSON data to HTML page 
function renderHTML(data){
  var x =  Math.floor((Math.random()*44) + 1);
  var quote = "<p>" + data[x].quote + "</p>" + "<h3>" + "-" + data[x].author + "</h3>";
	tweetquote = data[x].quote; 
  display.insertAdjacentHTML('beforeend', quote);

}

$("#newquote").click(function(){
  $("p").hide();
  $("h3").hide();
});

$('#tweet').on('click', function(event){
	event.preventDefault(); 
	window.open("https://twitter.com/intent/tweet?text=" + tweetquote)
});  
