const express = require("express");
const { expired } = require("../templates/expired");
require('dotenv').config()
//Variables
const router = express.Router();
const redirect_uri = process.env.REDIRECT_URI || "";
const client_id = process.env.CLIENT_ID;

const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}${redirect_uri}`;

router.get("/", (req, res) => {
  const user = req.signedCookies ? req.signedCookies.user : false;
  return res.send(expired(LOGIN_URL,user))
});


module.exports = router;