const express = require("express");
require('dotenv').config()

const api = require("./api.js");
const router = express.Router();

// this is the route GitHub redirects users back to after the log in
// there'll be a ?code=xxx search params provided by GH for us to use
// we need to POST this code to GH to get an access_token for talking to their API

router.get("/authenticate", (req, res) => {
  const code = req.query.code;
  api
    .getToken(code)
    .then(api.getUser)
    .then((user) => {
      // probably create a new user in your own DB here
      // do some proper session cookie stuff etc
      // this is just an over-simplified example
      // so we just stick the username into the cookie
      console.log(user);  // remove later. Useful for checking format of data back from api
      res.cookie("user", user.login, {
        httpOnly: true,
        signed: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: "lax",
      });
      res.redirect("../");
    });
});

// router.post("/log-out", (req, res) => {
//   res.clearCookie("user");
//   res.redirect("../");
// });


module.exports = router;
