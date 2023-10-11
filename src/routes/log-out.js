const express = require('express');
const router = express.Router();
const { removeSession } = require('../models/sessions.js');

router.post('/log-out', (req, res) => {
  try {
    const sid = req.signedCookies.sid;
    removeSession(sid);
    res.clearCookie('user');
    res.clearCookie('sid');
    res.redirect('../');
  } catch {
    console.error('Error with route:', error.message);
    throw error;
  }
});

module.exports = router;
