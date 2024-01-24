const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let errorValue = null;
  let descriptionValue = null;

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      errorValue = "❌ Invalid URL"; // If the URL doesn't work, prints a message to console.
    } else if (response.statusCode !== 200) {
      errorValue = `❌ Check your URL. Error code: ${response.statusCode}`; // if the URL only partially works, prints an error code
    } else {
      const data = JSON.parse(body);
      if (data[0]) { // if the data exists print the data!
        descriptionValue = data[0];
      } else {
        errorValue = "❌ Breed not found! 😿"; // message printed when no data found for breed
      }
    }
    callback(errorValue, descriptionValue); // passes our error or description back to index.js
  });
};

module.exports = { fetchBreedDescription };