const { layout } = require('./layout.js');
const { getPollList } = require('../models/polls.js');

function home(LOGIN_URL, user) {
  const title = 'TechYEScracy';
  let logIn = `<a href="${LOGIN_URL}" class="log-button">Log in with GitHub</a>`;
  if (user) {
    logIn = `
        <div class="flex user-container">
            <div class="user flex">
                <img src=${user.avatar_url} class="avatar">
                <p>${user.login}<br> Followers: ${user.followers}</p>
            </div>
            <div class="flex">
                <form action="/log-out" method="post">
                    <button class="log-button">Log out</button>
                </form>
            </div>
        </div>`;
  }
  const polls = getPollList(false);

  const pollListHtml = polls
    .map((poll) => {
      return `<li class="flex flex-column">
      <div>
            <p>${poll.content}<br>Vote count:<br>Yes: ${Math.floor(
              poll.yes,
            )} - No: ${Math.floor(poll.no)}</p>
      </div>
      <div class="flex votetype">
      <form method="POST" action="/vote?poll_id=${
        poll.id
      }&vote_type=yes" class="">
      <button class="button" type="submit">Yes</button>
      </form>
      <form method="POST" action="/vote?poll_id=${
        poll.id
      }&vote_type=no" class="">
     <button class="button" type="submit">No</button>
     </form>
     </div>
      </li>
         `;
    })
    .join('');

  const content = /*html*/ ` 
    <header class="banner flex flex-column">
        <div class="flex title">
            <h1>Tech<span class="title-highlight">YES</span>cracy</h1>
        </div>
            ${logIn}
    </header>
    <section id= 'pageLinks'class="flex">
        <form action='/form' method= 'GET'  >
            <button type ="submit">Create Poll</button>
        </form>
            <form action='expired' method= 'GET'  >
            <button type ="submit">View the Bill of Rights</button>
            </form>
    </section>
    <section>
    <h2>Polls</h2>
        <div class="poll-wrapper">
            
            
                ${pollListHtml}
            
        </div>
    </section>
    `;

  return layout({ title, content });
}
module.exports = { home };
