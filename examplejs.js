var ourRequest = new XMLHttpRequest();
ourReqest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourReqest.onload = function(){
  console.log(ourRequest.responseText);
}
ourRequest.send();
