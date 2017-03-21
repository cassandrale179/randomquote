var request = new XMLHttpRequest();
request.open('GET', 'http://quotes.stormconsultancy.co.uk/quotes.json');
request.onload = function(){
  var data = JSON.parse(request.responseText);
  var x =  Math.floor((Math.random()*40) + 1);
  console.log(data[x].author)
  alert(x);
}
request.send();
