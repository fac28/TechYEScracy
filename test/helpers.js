const db = require(`../src/database/db.js`);

function reset() {
    db.exec(/*sql*/ `
      BEGIN; -- Start a transaction
  
      DELETE FROM users;
      DELETE FROM polls;
  
      DELETE FROM sqlite_sequence WHERE name IN ('users', 'polls');
  
      COMMIT; -- Commit the transaction
    `);
  }

function count(tableName){
    const countQuery = db.prepare(/*sql*/ `
    SELECT COUNT(*) FROM ${tableName};
  `);
  return countQuery.pluck().get()
}

module.exports = {reset, count}