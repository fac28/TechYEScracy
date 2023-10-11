const db = require("../database/db.js");

const insert_poll = db.prepare(/*sql*/ `
  INSERT INTO polls (user_id, content, expires_at)
  VALUES ($user_id, $content, DATE('now', '+1 days'))
  RETURNING id
`);

function createPoll(user_id, content) {
  return insert_poll.get({ user_id, content });
}

const update_voteYes = db.prepare(/*sql*/ `
  UPDATE polls
  SET yes = yes + $voteCount
  WHERE id = $poll_id
  RETURNING id
`);
const update_voteNo = db.prepare(/*sql*/ `
  UPDATE polls
  SET no = no + $voteCount
  WHERE id = $poll_id
  RETURNING id
`);

function updatePoll(poll_id , vote_type, voteCount) {
  console.log({poll_id,vote_type,voteCount})
  if (vote_type === "yes") {
    return update_voteYes.get({poll_id,voteCount});
  }
  if (vote_type === "no") {
    return update_voteNo.get({poll_id,voteCount});
  }
}

const select_poll_by_id = db.prepare(/*sql*/ `
  SELECT user_id, content, yes, no, expires_at FROM polls WHERE id = ?
`);

function getPollByID(poll_id) {
  return select_poll_by_id.get(poll_id);
}

const select_all_activePolls = db.prepare(/*sql*/ `
  SELECT id, user_id, content, yes, no, expires_at FROM polls  WHERE expires_at > datetime('now')
`);
const select_all_expiredPolls = db.prepare(/*sql*/ `
  SELECT id, user_id, content, yes, no, expires_at FROM polls WHERE expires_at < datetime('now')
`);

function getPollList(expired) {
  if (expired) return select_all_expiredPolls.all();
  return select_all_activePolls.all();
}

module.exports = { createPoll,getPollByID, getPollList, updatePoll };
