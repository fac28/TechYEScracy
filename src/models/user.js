const db = require("../database/db.js");

const insert_user = db.prepare(/*sql*/ `
  INSERT INTO users (username, followers)
  VALUES ($username, $followers)
  RETURNING id
`);

function createUser(username, followers) {
  return insert_user.get({ username, followers });
}
module.exports = { createUser};