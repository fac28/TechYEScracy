// Node doesn't have fetch built-in
// so we have to npm install one
const fetch = require("node-fetch");
require('dotenv').config()
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const TOKEN_URL = "https://github.com/login/oauth/access_token";

function getToken(code) {
  console.log("get-token-func", code);
  const body = { client_id, client_secret, code };
  return fetch(TOKEN_URL, {
    method: "POST",
    body: JSON.stringify(body),
    // IMPORTANT: THESE HEADERS ARE REQUIRED
    // GH will do weird 404 errors if you don't specify exactly what data type you're sending
    headers: { accept: "application/json", "content-type": "application/json" }
  })
    .then(getJson)
    .then(data => {
      data.access_token;
      console.log(data.access_token);
    });
}

const USER_URL = "https://api.github.com/user";

function getUser(token) {
  return fetch(USER_URL, {
    headers: { accept: "application/json", authorization: `token ${token}` }
  }).then(data => {
    console.log("get user", data)
    getJson(data);

  });
}

function getJson(response) {
  if (!response.ok) {
    console.log("getJson res", response)
    const error = new Error("HTTP Error");
    error.status = response.statusCode;
    throw error;
  }
  return response.json();
}

module.exports = { getToken, getUser };
