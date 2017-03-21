
var display = document.getElementById("quote-display");
var btn = document.getElementById("newquote");

btn.addEventListener("click", function(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://quotes.stormconsultancy.co.uk/quotes.json');
  request.onload = function(){
    var data = JSON.parse(request.responseText);
    renderHTML(data);
  }
  request.send();
});


function renderHTML(data){
  var x =  Math.floor((Math.random()*44) + 1);
  var quote = "<p>" + data[x].quote + "</p>" + "<h3>" + "-" + data[x].author + "</h3>";
  display.insertAdjacentHTML('beforeend', quote);
}

$("#newquote").click(function(){
  $("p").hide();
  $("h3").hide();
});
