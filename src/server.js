const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const homeRoute = require("./routes/home");
const authenticate = require("./routes/authenticate");
const logOut = require("./routes/log-out");
const vote = require("./routes/vote");
// const { getSession, removeSession } = require('./model/session.js');
const body = express.urlencoded({ extended: false });
// const cookies = cookieParser(process.env.COOKIE_SECRET);

//const templates = require('./templates')

// function sessions(req, res, next) {
//     const sid = req.signedCookies.sid;
//     const session = getSession(sid);
//     if (session) {
//         const expiry = new Date(session.expires_at);
//         const today = new Date();
//         if (expiry < today) {
//             removeSession(session.id);
//             res.clearCookie(sid);
//         }
//         req.session = session;
//     }
//     next();
// }

//Middleware
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString("en-GB");
  console.log(`${time} ${req.method} ${req.url}`);
  next();
});
// app.use(cookies);
app.use(body);
app.use(express.static('public'));

//Routes

app.use("/", homeRoute);
app.use("/authenticate", authenticate);
app.use("/log-out", logOut);
app.post("/vote", vote);
module.exports = app;
