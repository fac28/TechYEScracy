const test = require('node:test');
const assert = require('node:assert');
const { reset, request, count } = require('./helpers.js');
const { createUser } = require('../src/models/user');
const { createPoll } = require('../src/models/polls');

test('POST /form creates a new poll', async () => {
  reset();

  const user = createUser('testuser', 0);

  const question = 'We should be governed by democracy? Yes or No?';

  const { status } = await request('/form', {
    method: 'POST',
    body: `question=${question}`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  });

 
  const createdPoll = createPoll(user.id, question);
  assert.ok(
    createdPoll,
    'Expected a poll to be created using the createPoll function',
  );

  const pollCount = count('polls');

  assert.equal(pollCount, 1, 'Expected one poll to be created');
  assert.equal(
    status,
    200,
    `Expected sign up to redirect, but got status: ${status}`,
  );

  reset();
});
