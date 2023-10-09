const express = require("express");
const cookieParser = require("cookie-parser");

// all the fetch requests to GitHub happen in api.js
const api = require("./api.js");

const server = express();

server.use(cookieParser("this should really be a secret env var"));

const client_id = process.env.CLIENT_ID;

const LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

server.get("/", (req, res) => {
  const user = req.signedCookies.user;
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

// this is the route GitHub redirects users back to after the log in
// there'll be a ?code=xxx search params provided by GH for us to use
// we need to POST this code to GH to get an access_token for talking to their API

server.get("/authenticate", (req, res) => {
  const code = req.query.code;
  api
    .getToken(code)
    .then(api.getUser)
    .then(user => {
      // probably create a new user in your own DB here
      // do some proper session cookie stuff etc
      // this is just an over-simplified example
      // so we just stick the username into the cookie
      res.cookie("user", user.login, {
        httpOnly: true,
        signed: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: "lax"
      });
      res.redirect("/");
    });
});

server.post("/log-out", (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
});

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
