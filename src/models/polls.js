const db = require("../database/db.js");

const insert_poll = db.prepare(/*sql*/ `
  INSERT INTO polls (user_id, content, expires_at)
  VALUES ($user_id, $content, DATE('now', '+1 days'))
  RETURNING id
`);

function createPoll(user_id, content) {
  return insert_poll.get({ user_id, content });
}

const select_poll_by_id = db.prepare(/*sql*/ `
  SELECT user_id, content, yes, no, expires_at FROM polls WHERE id = ?
`);

function getPollList(poll_id) {
  return select_poll_by_id.all(poll_id);
}

module.exports = { createPoll, getPollList };
