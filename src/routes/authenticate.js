const express = require('express');
require('dotenv').config();
const { createUser, getUserByUsername } = require('../models/user.js');
const { createSession } = require('../models/sessions.js');
const api = require('./api.js');
const router = express.Router();

// this is the route GitHub redirects users back to after the log in
// there'll be a ?code=xxx search params provided by GH for us to use
// we need to POST this code to GH to get an access_token for talking to their API

router.get('/', (req, res) => {
  try {
    const code = req.query.code;
    api
      .getToken(code)
      .then(api.getUser)
      .then((user) => {
        console.log(user);
        // probably create a new user in your own DB here
        // do some proper session cookie stuff etc
        // this is just an over-simplified example
        // so we just stick the username into the cookie
        res.cookie('user', user, {
          httpOnly: true,
          signed: true,
          maxAge: 1000 * 60 * 60 * 24, // 1 day
          sameSite: 'lax',
        });
        if (user) {
          let existingUser = getUserByUsername(user.login);
          if (!existingUser) {
            existingUser = createUser(user.login, user.followers);
          }
          const session_id = createSession(existingUser.id);
          res.cookie('sid', session_id, {
            signed: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: 'lax',
            httpOnly: true,
          });
        }
        res.redirect('/');
      });
  } catch {
    console.error('Error with route:', error.message);
    throw error;
  }
});

module.exports = router;
