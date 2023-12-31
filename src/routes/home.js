const express = require('express');
const { home } = require('../templates/home');
require('dotenv').config();
//Variables
const router = express.Router();
const redirect_uri = process.env.REDIRECT_URI || '';
const client_id = process.env.CLIENT_ID;

const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}${redirect_uri}`;

router.get('/', (req, res) => {
  try {
    const user = req.signedCookies ? req.signedCookies.user : false;
    return res.send(home(LOGIN_URL, user));
  } catch (error) {
    console.error('Error with route:', error.message);
    throw error;
  }
});

module.exports = router;
