const express = require('express');
const { form } = require('../templates/form');
const router = express.Router();
const polls = require('../models/polls');
const { getUserByUsername } = require('../models/user');
router.get('/', (req, res) => {
  //const content = formTemplate;
  try {
    res.send(form());
  } catch (error) {
    console.error('Error with route:', error.message);
    throw error;
  }
});

router.post('/', (req, res) => {
  try {
    const question = req.body.question;
    const user = req.signedCookies ? req.signedCookies.user : false;
    const userID = getUserByUsername(user.login);

    polls.createPoll(userID.id, question);
    res.redirect('/');
  } catch (error) {
    res.redirect('/');
  }
});

module.exports = router;
