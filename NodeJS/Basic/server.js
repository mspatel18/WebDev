// Import the express module
const express = require('express');

// Create an instance of an express app
const app = express();
// Declare a variable with the `var` keyword
var foo = 'hello';

// Declare a variable with the `let` keyword
let bar = 'world';

// Declare a variable with the `const` keyword
const baz = '!';
// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send(foo+" "+bar+baz);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
