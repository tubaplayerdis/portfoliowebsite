window.onload = function() {  
  fetch("https://aaronwilk.dev/visit")
    .then(function (response) {
  	// The API call was successful!
  	return response.json();
  }).then(function (data) {
  	// This is the JSON from our response
    console.log("total visits")
  	console.log(data.visits);
  }).catch(function (err) {
  	// There was an error
  	console.warn('Something went wrong.', err);
  });
}
