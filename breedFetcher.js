const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
  if (error) {
    console.log("there was an error: ", error);
  } else {
    console.log(typeof body);
    console.log(body);
  }
})