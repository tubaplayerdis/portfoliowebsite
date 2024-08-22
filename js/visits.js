window.onload = function() {
  var obj
  
  fetch("http://aaronwilk.dev/visit")
  .then(response => response.text())
  .then(text => console.log(text))
  .then(data => {
    obj = data;
   })

  console.log("Number of visits to the site: "+obj.visits)
}
