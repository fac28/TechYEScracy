const db = require(`../src/database/db.js`);

function reset() {
  db.exec(/*sql*/ `

      DELETE FROM polls;
      DELETE FROM users;
      
  
      DELETE FROM sqlite_sequence WHERE name IN ('users', 'polls');
  
  
    `);
}

function count(tableName) {
  const countQuery = db.prepare(/*sql*/ `
    SELECT COUNT(*) FROM ${tableName};
  `);
  return countQuery.pluck().get();
}

module.exports = { reset, count };
