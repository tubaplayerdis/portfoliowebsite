fetch("http://localhost:3000/visit")
.then(response => response.text())
.then(text => console.log(text))
