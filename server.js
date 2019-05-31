// this is the main entry file

// get a basic express server up and running

const express = require('express');  // 1.

const app = express(); // 2. initialise our app variable with express

app.get('/', (req, res) => res.send('API Running'));
// do a single endpoint just to test with app.get request to ('/') and
// pu in our callback with (req, res) and then do a res.send('Api Running')
// which will send data to the browser saying API Running

const PORT = process.env.PORT || 5000;
// 4 put the port in a variable here which looks for environment variable
// port to use because when we deploy to Heroku thats where it is going to
// to get the port number || but if there is no environment variable set
// then it will default to 5000.

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// 3 app.listen();to the port
// 6 pass in the port to listen and then do a callback and if we want it to 
// do something once it connects then we console.log with backticks and throw
// in the ${PORT} variable