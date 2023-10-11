const test = require('node:test');
const assert = require('node:assert');
const db = require('../src/database/db.js');
const { reset, count } = require('./helpers.js');
const { createPoll, getPollByID, getPollList, updatePoll } = require(
  `../src/models/polls.js`,
);
const { createUser } = require(`../src/models/user.js`);

test('can create a new poll', () => {
  reset();
  const before = count('polls');
  createUser('Egg', 20);
  createPoll(1, 'No eggs');
  const after = count('polls');

  assert.equal(
    before,
    after - 1,
    `Expected the number of rows in polls to be 1, but found ${after}`,
  );
});

test("creating a poll with a user that doesn't exist throws an error", () => {
  reset();

  // Attempt to create a poll with a non-existent user (e.g., user ID 2)
  assert.throws(() => {
    createPoll(2, 'No eggs'); // This should throw an error
  }, /FOREIGN KEY constraint failed/); // Verify the error message
});

test('can select a poll by id', () => {
  reset();
  createUser('Egg', 20);
  createPoll(1, 'No eggs');
  const poll = getPollByID('1');
  assert.equal(
    poll.user_id,
    1,
    `Expected the retrieved polls's ID to be 1, but found ${poll.id}`,
  );
});

test('can get list of active polls', () => {
  reset();
  createUser('Egg', 20);
  createPoll(1, 'No eggs');
  const activePolls = getPollList(false); //false returns active
  assert.equal(
    activePolls.length,
    1,
    `Expected the number of retrieved polls to be 1, but found ${activePolls.length}`,
  );
});

const insert_expired_poll = db.prepare(/*sql*/ `
  INSERT INTO polls (user_id, content, expires_at)
  VALUES (1, 'Expired Poll', DATE('now', '-1 days'))
  RETURNING id
`);

function createExpiredPoll() {
  return insert_expired_poll.get();
}

test('can get list of expired polls', () => {
  reset();

  createUser('Egg', 20);
  createExpiredPoll();

  const expiredPolls = getPollList(true); //true returns expired
  assert.equal(
    expiredPolls.length,
    1,
    `Expected the number of retrieved polls to be 1, but found ${expiredPolls.length}`,
  );
});

test('voting yes should increase the yes vote count', () => {
  reset();
  createUser('Egg', 20);
  createPoll(1, 'No eggs');
  const pollBefore = getPollByID('1');
  const yesBefore = pollBefore.yes;

  updatePoll('1', 'yes', 1);
  const pollAfter = getPollByID('1');
  const yesAfter = pollAfter.yes;

  assert.ok(
    yesBefore < yesAfter,
    `Expected ${yesBefore} to be less than ${yesAfter}`,
  );
});

test('voting no should increase the no vote count', () => {
  reset();
  createUser('Egg', 20);
  createPoll(1, 'No eggs');
  const pollBefore = getPollByID('1');
  const noBefore = pollBefore.no;

  updatePoll('1', 'no', 1);
  const pollAfter = getPollByID('1');
  const noAfter = pollAfter.no;

  assert.ok(
    noBefore < noAfter,
    `Expected ${noBefore} to be less than ${noAfter}`,
  );
});
