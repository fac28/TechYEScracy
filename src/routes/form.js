const express = require("express");
const { form } = require("../templates/form");
const router = express.Router();
const polls = require("../models/polls");
router.get("/form", (req, res) => {
  //const content = formTemplate;
  try {
    res.send(form());
  } catch (error) {
    console.error("Error with route:", error.message);
    throw error;
  }
});

router.post("/form", (req, res) => {
  try {
    const question = req.body.question;
    console.log(question);
    const id = 1;
    polls.createPoll(id, question);
    res.redirect("../");
  } catch (error) {
    console.error("Error with POST route:", error.message);
    // Handle the error (e.g., send an error response or redirect to an error page)
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
