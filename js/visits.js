window.online = function() {  
  fetch("https://aaronwilk.dev/visit", {method: "POST"})
    .then(function (response) {
  	// The API call was successful!
  	return response.json();
  }).then(function (data) {
  	// This is the JSON from our response
    console.log("total visits as post")
  	console.log(data.visits);
  }).catch(function (err) {
  	// There was an error
  	console.warn('Something went wrong.', err);
  });

  fetch("https://aaronwilk.dev/visit", {method: "GET"})
    .then(function (response) {
  	// The API call was successful!
  	return response.json();
  }).then(function (data) {
  	// This is the JSON from our response
    console.log("total visits as get")
  	console.log(data.visits);
  }).catch(function (err) {
  	// There was an error
  	console.warn('Something went wrong.', err);
  });
}
