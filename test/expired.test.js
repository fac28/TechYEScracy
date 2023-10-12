const test = require('node:test');
const assert = require('node:assert');
const { reset, request } = require('./helpers.js');

test('GET /expired returns a valid response', async () => {
  reset();

  const { status, body } = await request('/expired', {
    method: 'GET',
    headers: { 'content-type': 'text/html' },
  });

  assert.equal(
    status,
    200,
    `Expected a 200 status code, but got status: ${status}`,
  );
  reset();
});
