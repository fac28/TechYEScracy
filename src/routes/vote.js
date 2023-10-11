const express = require("express");
require('dotenv').config()
const { home } = require("../templates/home");
const { updatePoll } = require('../models/polls.js');

const router = express.Router();

router.post("/", (req, res) => {
    const user = req.signedCookies ? req.signedCookies.user : false;
    const {poll_id,vote_type} = req.query;
    updatePoll(poll_id, vote_type , 1);
    return res.redirect("/")
  });
  
module.exports = router;