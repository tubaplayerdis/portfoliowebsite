window.onload = function() {  
  fetch("http://aaronwilk.dev/visit")
  .then(response => response.text())
  .then(text => console.log(`Number of visits to the site: ${text}`))

}
