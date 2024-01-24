const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
  if (error) {
    console.log("there was an error: ", error);
  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  }
})