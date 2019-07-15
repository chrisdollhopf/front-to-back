const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

//  @route    GET api/users, step 10 changed tp POST
//  @desc     Test route, step 10 changed to Register User
//  @access   Public

// with regard to public and private, if you need a token
// to access a specific route, for instance if you need to
// add a specific profile therefore you need to be authenticated
// so you need to send along a token to that route in order
// for it to work otherwise you are going to get something that
// sais unauthorised access or something similar.
// THIS is a public route that we do not need a token for.
// The way that we are going to make that happen later on
// is by creating our own auth middleware...
router.post(
  "/",
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters' 
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    // we console.log her becasue this is the object of data that is
    // sent to the route
    // In order for this to work we have to initialise the middle
    // ware for the body parser see step 10 server.js
    // Now are able to do a post request via postman with any data and
    // access it with req.body
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User route");
  }
);

module.exports = router;
