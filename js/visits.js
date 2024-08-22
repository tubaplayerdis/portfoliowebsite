window.onload = function() {
  fetch("http://aaronwilk.dev:3000/visit")
  .then(response => response.text())
  .then(text => console.log(text))
}
