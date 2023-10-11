const express = require("express");
const router = express.Router();
const { removeSession } = require("../models/sessions.js");

router.post("/", (req, res) => {
  const sid = req.signedCookies.sid;
  removeSession(sid);
  res.clearCookie("user");
  res.clearCookie("sid");
  res.redirect("/");
});

module.exports = router;
