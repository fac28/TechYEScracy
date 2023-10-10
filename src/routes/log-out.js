const express = require("express");
const router = express.Router();

router.post("/log-out", (req, res) => {
    res.clearCookie("user");
    res.redirect("../");
  });

  module.exports = router;