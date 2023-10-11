const { layout } = require('./layout.js');
const { getPollList } = require('../models/polls.js');


function expired(LOGIN_URL, user) {
  const title = "Bill of Rights";
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

    const polls = getPollList(true); 

   
     const pollListHtml = polls.map(poll => {
        if (poll.yes>poll.no) //only returns polls that have more yes votes than no votes
         return `<li>${poll.content} - Yes: ${Math.floor(poll.yes)}, No: ${Math.floor(poll.no)}</li>
         `;
     }).join('');

    const content = /*html*/ ` 
    <div class="banner">
        <div class="title">
            <h1>Bill of Rights</h1>
        </div>
        <div class="">
            ${logIn}
            <form action='/form' method= 'GET'  >
            <button type ="submit">Create Poll</button>
            </form>
        </div>
        <div class="">
            
            <ul>
                ${pollListHtml}
            </ul>
        </div>
    </div>
    `;

  return layout({ title, content });
}
module.exports = { expired };
