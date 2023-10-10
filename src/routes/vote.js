const express = require("express");
require('dotenv').config()
const { home } = require("../templates/home");
const { updatePoll } = require('../models/polls.js');

const router = express.Router();

router.post("/vote", (req, res) => {
    console.log("vote route")
    const user = req.signedCookies ? req.signedCookies.user : false;
    const {poll_id,vote_type} = req.query;
    console.log(poll_id)
    console.log(vote_type)

    updatePoll(poll_id, vote_type , 1);
    return res.redirect("../")
  });
  

module.exports = router;
  