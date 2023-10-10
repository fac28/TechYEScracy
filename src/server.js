const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const homeRout = require("./routes/home");
const authenticate = require("./routes/authenticate");
const logOut = require("./routes/log-out");
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
// app.use(body);
// app.use(express.static('public'));

//Routes

app.get("/", homeRout);
app.get("/authenticate", authenticate);
app.post("/log-out", logOut);
module.exports = app;
