const Profile = require('./profile.js');
const renderer = require('./renderer');
const querystring = require('querystring');

var commonHeaders = {'Content-Type': 'text/html'}

// handle / route
function home(req, resp) {
  if(req.url === '/') {
    if(req.method.toLowerCase() === 'get') {
      resp.writeHead(200, commonHeaders);
      renderer.view('header', {}, resp);
      renderer.view('search', {}, resp);
      renderer.view('footer', {}, resp);
      resp.end('');
    }
    else {
      req.on('data', (data) => {
        const username = querystring.parse(data.toString()).username;
        resp.writeHead(303, {'Location': '/' + username});
        resp.end();
      });
    }
  }
}

// handle /user route
function userProfile(req, resp) {
  username = req.url.replace('/', '');
  if (username.length > 0) {
    var studentProfile = new Profile(username);

    studentProfile.on('end', profileJson => {
      profileVals = {
        avatarUrl: profileJson.gravatar_url,
        username: profileJson.profile_name,
        badges: profileJson.badges.length,
        jsPoints: profileJson.points.JavaScript
      };

      resp.writeHead(200, commonHeaders);
      renderer.view('header', {}, resp);
      renderer.view('profile', profileVals, resp);
      renderer.view('footer', {}, resp);
      resp.end('');
    });

    studentProfile.on('error', error => {
      resp.writeHead(200, commonHeaders);
      renderer.view('header', {}, resp);
      renderer.view('error', {errorMessage: error.message}, resp);
      renderer.view('search', {}, resp);
      renderer.view('footer', {}, resp);
      resp.end('');
    });
  }
}

module.exports.home = home;
module.exports.userProfile = userProfile;
