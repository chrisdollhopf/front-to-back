// this is where the mongodb connection happens
const mongoose = require('mongoose');
const config = require('config'); // bring in the config file
// then to get the mongoURI variable we place it in 
const db = config.get('mongoURI'); // here we can get any of the values in the json file
// if we use mongoose.connect(db) it will return a promise but then we would be required use
// .catch .then syntax BUT in this course we are going to be using async await because it 
// seems to be the new standard and is much cleaner and it make your code look like it is 
// synchronous even thought it is asynchronous so async await will be used in this project.

// whenever we use asnyc await we are going to wrap it in a try catch block like so:
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true // warning to use after first db connect from server.js
    }); // await for mongoose to return a promise (useNewUrlParser: true came in later).
    console.log('MongoDB Connected...')
  } catch {
    console.error(err.message) // if somthing goes wrong console an error with the err value which has a message prop on it
    // Exit process with failure
    process.exit(1)
  }
}
// then export the module connectDB method or function
module.exports = connectDB;