const db = require(`../src/database/db.js`);

function reset() {
  db.exec(/*sql*/ `
      DELETE FROM users;
      DELETE FROM polls;
      DELETE FROM sqlite_sequence WHERE name='users';
      DELETE FROM sqlite_sequence WHERE name='polls'
      `);
}

module.exports = {reset}