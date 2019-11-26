const https = require('https');

// Base URL which will be used to get weather data
const weatherDataBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// This would extend the base URL (above) by adding a 2 queries:
// 1. Name of a city which a user wants to get weather data of
// 2. Weather map api key, this should be included in env vars
const cityWeatherData = weatherDataBaseUrl + `?q=${process.argv[2]}&APPID=${process.env.WEATHER_MAP_API_KEY}`;

// Try getting weather data by sending a HTTPS GET request
try {
  const weatherDataReq = https.get(`${cityWeatherData}`, resp => {
    let respBody = '';

    // Append the response body chunks to respBody
    resp.on('data', respBodyData => {
      respBody += respBodyData.toString();
    });

    // After the response has been completed:
    resp.on('end', () => {
      // parse the response body
      respBody = JSON.parse(respBody);

      // try putting out the temperature for the city
      try {
        console.dir(`Current temperature in ${respBody.name} is ${respBody.main.temp}`);
      }

      // if temperature is not found, then log out the error from the response body
      catch(error) {
        console.error(`${respBody.message}`);
      }
    });
  })

  // catch any errors during aynchronous call
  weatherDataReq.on('error', error => {
    console.error(error.message);
  });
}

// if the weather map URL is invalid, log out the error message
catch(error) {
  console.error(error.message);
}


// const w = '{"coord":{"lon":39.67,"lat":-4.05},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":299.15,"pressure":1016,"humidity":83,"temp_min":299.15,"temp_max":299.15},"visibility":10000,"wind":{"speed":4.1,"deg":180},"clouds":{"all":75},"dt":1569394366,"sys":{"type":1,"id":2556,"message":0.0063,"country":"KE","sunrise":1569380979,"sunset":1569424602},"timezone":10800,"id":186301,"name":"Mombasa","cod":200}'
//
// respBody = JSON.parse(w);
// console.dir(`Current temperature in ${respBody.name} is ${respBody.main.temp}`);
