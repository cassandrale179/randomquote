var request = new XMLHttpRequest();
request.open('GET', 'http://quotes.stormconsultancy.co.uk/quotes.json');
request.onload = function(){
  console.log(request.responseText);
}
request.send();
