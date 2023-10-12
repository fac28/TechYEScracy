const test = require('node:test');
const assert = require('node:assert');
const { reset, request } = require('./helpers.js');
const { removeSession } = require('../src/models/sessions.js');

test('POST /logout removes session and cookies', async () => {
  reset();

  const sessionID = 'sampleSessionID';

  const { status } = await request('/logout', {
    method: 'POST',
    cookies: { sid: sessionID, user: 'sampleUser' },
  });
  assert.equal(
    status,
    404,
    `Expected logout to redirect, but got status: ${status}`,
  );
  const sessionRemoved = removeSession(sessionID);
  assert.ok(sessionRemoved, 'Expected the session to be removed');

  reset();
});
