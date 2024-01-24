const request = require('request');

const breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  if (error) {
    console.log("❌ Invalid URL"); // If the URL doesn't work, prints a message to console.
  } else if (response.statusCode !== 200) {
    console.log("❌ Check your URL. Error code: ", response.statusCode); // if the URL only partially works, prints an error code
  } else {
    const data = JSON.parse(body);
    if (data[0]) { // if the data exists print the data!
      console.log(data[0]);
    } else {
      console.log("❌ Breed not found! 😿"); // message printed when no data found for breed
    }
  }
});