const express = require('express');
require('dotenv').config();
const { updatePoll, createVote } = require('../models/polls.js');
const { getUserByUsername } = require('../models/user.js');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = req.signedCookies ? req.signedCookies.user : false;
    const { poll_id, vote_type } = req.query;
    if (!user) {
      return;
    }
    const userID = getUserByUsername(user.login);

    console.log(userID);

    if (user) {
      // Create a new vote record in the "votes" table
      await createVote(userID.id, poll_id, vote_type);
      // Update the poll
      updatePoll(poll_id, vote_type, parseInt(user.followers));
    }

    return res.redirect('/');
  } catch (error) {
    console.error('Error with route:', error.message);
    res.status(500).redirect('/');
    return;
  }
});

module.exports = router;
