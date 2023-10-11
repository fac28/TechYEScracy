const express = require("express");
const router = express.Router();
const { removeSession } = require("../models/sessions.js");

router.post("/log-out", (req, res) => {
  removeSession(sid);
  res.clearCookie("user");
  res.clearCookie("sid");
  res.redirect("../");
});

module.exports = router;
