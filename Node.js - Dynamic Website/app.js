const http = require('http');
const router = require('./router.js');

//Create a server
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, resp) => {
  router.home(req, resp);
  router.userProfile(req, resp);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
