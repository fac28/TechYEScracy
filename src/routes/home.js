const express = require("express");
require('dotenv').config()
//Variables
const router = express.Router();

const client_id = process.env.CLIENT_ID;

const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

router.get("/", (req, res) => {
  const user = req.signedCookies ? req.signedCookies.user : false;
  if (user) {
    res.send(`
      <h1>Welcome back ${user}</h1>
      <form action="/log-out" method="post"><button>Log out</button></form>
    `);
  } else {
    res.send(`
      <h1>Welcome</h1>
      <a href="${LOGIN_URL}">Log in with GitHub</a>
    `);
  }
});

module.exports = router;
