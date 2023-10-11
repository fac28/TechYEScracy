const db = require(`../src/database/db.js`);
const server = require(`../src/server.js`);

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
async function request(pathname, options = {}) {
  const app = server.listen(0);
  const { port } = app.address();
  const url = new URL(pathname, `http://localhost:${port}`);
  options.headers = { ...options.headers, connection: 'close' };
  const response = await fetch(url, options);
  app.close();
  const body = await response.text();
  const headers = Object.fromEntries(response.headers);
  return { status: response.status, body, headers };
}
function getLastId(tableName) {
  const query = db.prepare(`SELECT MAX(id) AS last_id FROM ${tableName}`);
  const result = query.get();
  return result.last_id;
}

module.exports = { reset, count, request, getLastId };
