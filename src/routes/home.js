const express = require("express");
const { home } = require("../templates/home");
require('dotenv').config()
//Variables
const router = express.Router();

const client_id = process.env.CLIENT_ID;

const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

router.get("/", (req, res) => {
  const user = req.signedCookies ? req.signedCookies.user : false;
  // if (user) {
  //   return res.send(home(LOGIN_URL,user))
  // }
  return res.send(home(LOGIN_URL,user))
});

module.exports = router;
