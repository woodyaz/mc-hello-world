/* Assignment #1 - Hello World */

// Dependencies
const http = require('http');
const url = require('url');

// Create the server.
const server = http.createServer((req, res) => {
  // Get path.
  const pathName = url.parse(req.url).pathname;

  // Get method.
  const httpMethod = req.method.toLowerCase();

  // Set content-type
  res.setHeader('content-type', 'application/json');

  // Declare greeting.
  let greeting = '';

  // Set greeting if request matches /hello path and http method is post.
  if (pathName === '/hello' && httpMethod === 'post') {
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