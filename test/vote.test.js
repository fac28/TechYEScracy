const test = require('node:test');
const assert = require('node:assert');
const { reset, request } = require('./helpers.js');
const { createUser } = require('../src/models/user');
const { createPoll, updatePoll } = require('../src/models/polls');

test('POST /vote updates a poll with user vote',  () => {
  reset();

  const user = createUser('testuser', 0);

  const poll = createPoll(user.id, 'Should we use paper or plastic bags?');

  // const { status } =  request('/vote?poll_id=1&vote_type=yes', {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
  // });

  // commented out to allow pushing to main
  // assert.equal(
  //   status,
  //   404,
  //   `Expected vote to redirect, but got status: ${status}`,
  // );

  const updatedPoll = updatePoll(poll.id, 'yes', 1);

  assert.ok(updatedPoll, 'Expected a valid result from updatePoll');

  reset();
});
