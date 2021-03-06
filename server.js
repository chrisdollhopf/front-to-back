// this is the main entry file

// get a basic express server up and running

const express = require('express');  // 1.

// 7. bring in the db.js module
const connectDB = require('./config/db')

const app = express(); // 2. initialise our app variable with express

// 8.  Connect database:
connectDB();

// 10. Bring in bodyparser, it used to be that you had to install
// bodyparser as a seperate package and bring it in and then
// initialise it but now is actually included with express
// Init Middlare - allows retrieval of the users body data.
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));
// 5.  do a single endpoint just to test with app.get request to ('/') and
// put in our callback with (req, res) and then do a res.send('Api Running')
// which will send data to the browser saying API Running

// 9. Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;
// 4.  put the port in a variable here which looks for environment variable
// port to use because when we deploy to Heroku thats where it is going to
// to get the port number || but if there is no environment variable set
// then it will default to 5000.

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// 3.  Take that app variable and listen to it on a port app.listen();to the port
// 6.  pass in the port to listen and then do a callback and if we want it to 
// do something once it connects then we console.log with backticks and throw
// in the ${PORT} variable.