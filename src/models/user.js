const db = require("../database/db.js");

const insert_user = db.prepare(/*sql*/ `
  INSERT INTO users (username, followers)
  VALUES ($username, $followers)
  RETURNING id
`);

function createUser(username, followers) {
  return insert_user.get({ username, followers });
}

const select_user_by_username = db.prepare(/*sql*/ `
  SELECT id, username, followers
  FROM users WHERE username = ?
`);

function getUserByUsername(username) {
  return select_user_by_username.get(username);
}

const select_user_by_userID = db.prepare(/*sql*/ `
  SELECT id, username, followers
  FROM users WHERE username = ?
`);

function getUserByUserID(user_id) {
  return select_user_by_userID.get(user_id);
}

module.exports = { createUser, getUserByUsername, getUserByUserID};