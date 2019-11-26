const https = require('https');
const http = require('http');

// function to print out the message
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;

  console.log(message);
}

function printUserDetails(username) {
  // try to run the get method,
  // if the method has been passed invalid argument then catch the error
  try {
    // get username's profile info from Treehouse
    const request = https.get(`https://teamtreehouse.com/${username}.json`, resp => {
      if (resp.statusCode === 200) {
        respBody = "";

        // response body will be coming in packates in buffer format
        // on data received, concatenate the response data with the respBody var
        resp.on('data', respData => {
          respBody += respData.toString();
        });

        // print out the user details needed when the response has been completed
        resp.on('end', () => {
          // try to parse respBody
          try {
            const respBodyJson = JSON.parse(respBody);
            printMessage(respBodyJson.profile_name, respBodyJson.badges.length, respBodyJson.points.total)
          }
          catch(error) {
            console.error(error.message);
          }
        });
      }
      else {
        const statusCodeErr = `There was an error getting profile for ${username} (${http.STATUS_CODES[resp.statusCode]})`;
        console.error(statusCodeErr);
      }
    });

    // catch any errors during asynchronous call
    request.on('error', error => console.error(error.message));
  }
  catch (error) {
    console.error(error.message);
  }
}

// get users whose details we wish to display via command line arguments
// the first two args are regarding this app and nodejs therefore slice them
userLists = process.argv.slice(2);

// for each user, run printUserDetails function
// the user would be passed automatically to the function
userLists.forEach(printUserDetails);
