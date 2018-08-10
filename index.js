/* Assignment #1 - Hello World */

// Dependencies
const http = require('http');
const url = require('url');

// Create the server.
const server = http.createServer((req, res) => {
  // Get path.
  const pathName = url.parse(req.url).pathname;
  // Set content-type
  res.setHeader('content-type', 'application/json');
  // Declare greeting.
  let greeting = '';
  // Reply if path matches /hello
  if (pathName === '/hello') {
    greeting = JSON.stringify({
      'message' : 'Greetings earthling, and hello world!',
    });
  };
  // Send the message!
  res.end(greeting);
});

// Listen on port 3000 and let the world know you're running!
server.listen(3000, () => {
  console.log('Listening on port 3000');
});