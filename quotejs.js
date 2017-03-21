
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
  var x =  Math.floor((Math.random()*40) + 1);
  var htmlString = "<p>" + data[x].author + "is the author" + "</p>";
  display.insertAdjacentHTML('beforeend', htmlString);
}

$("#newquote").click(function(){
  $("p").hide();
});
