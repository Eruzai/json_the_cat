const request = require('request');

const breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  if (error) {
    console.log("there was an error: ", error);
  } else {
    const data = JSON.parse(body);
    console.log(data[0]);
  }
})