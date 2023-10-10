const test = require("node:test");
const assert = require("node:assert");
const { reset, count } = require("./helpers.js");
const { createUser, getUserByUsername, getUserByUserID } = require(
  `../src/models/user.js`
);

test("test test", () => {
    assert.equal(1, "1", "Expected 1 to be equal to '1'");
  });
  
  test("can create a new user", () => {
    reset();
    const before = count("users");
    createUser("Egg", 20);
    const after = count("users");
    assert.equal(
      before,
      after - 1,
      "Expected the count of users before to be one less than after creating a new user"
    );
  });
  
  test("can retrieve a user by username", () => {
    reset();
    createUser("Egg", 20);
    const user = getUserByUsername("Egg");
    assert.equal(user.username, "Egg", "Expected the retrieved user to have the username 'Egg'");
  });
  
  test("can retrieve a user by userID", () => {
    reset();
    createUser("Egg", 20);
    const user = getUserByUserID("1");
    assert.equal(user.id, 1, "Expected the retrieved user's ID to be 1");
  });
  
  test("returning a non-existent user returns null", () => {
    reset();
    const user = getUserByUsername("noEgg");
    const user2 = getUserByUserID(100);
    assert.equal(user, null, "Expected getUserByUsername to return null for a non-existent user");
    assert.equal(user2, null, "Expected getUserByUserID to return null for a non-existent user");
  });
  
