const { layout } = require('./layout.js');
const { getPollList } = require('../models/polls.js');


function home(LOGIN_URL, user) {
  const title = "TechYEScracy";
  let logIn = `<a href="${LOGIN_URL}">Log in with GitHub</a>`;
  if (user) {
    logIn = `
        <h2><img src=${user.avatar_url}>${user.login} Followers: ${user.followers}</h2>
        <form action="/log-out" method="post"><button>Log out</button></form>`;
    }

    const polls = getPollList(false); 

   
     const pollListHtml = polls.map(poll => {
         return `<li>${poll.content} - Yes: ${Math.floor(poll.yes)}, No: ${Math.floor(poll.no)}</li>
         <form method="POST" action="/vote?poll_id=${poll.id}&vote_type=yes" class="">
         <button class="button" type="submit">Yes</button>
         </form>
         <form method="POST" action="/vote?poll_id=${poll.id}&vote_type=no" class="">
        <button class="button" type="submit">No</button>
        </form>
         `;
     }).join('');

    const content = /*html*/ ` 
    <div class="banner">
        <div class="title">
            <h1>TechYEScracy</h1>
        </div>
        <div class="">
            ${logIn}
            <form action='/form' method= 'GET'  >
            <button type ="submit">Create Poll</button>
            </form>
        </div>
        <div class="">
            <h2>Polls</h2>
            <ul>
                ${pollListHtml}
            </ul>
        </div>
    </div>
    `;

  return layout({ title, content });
}
module.exports = { home };
