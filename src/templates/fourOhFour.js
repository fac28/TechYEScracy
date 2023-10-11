const { layout } = require('./layout.js');
const { getPollList } = require('../models/polls.js');

function notFound() {
  const title = 'Not Found';
 

  const polls = getPollList(false);

  const pollListHtml = polls
    .map((poll) => {
      return `<li>${poll.content} - Yes: ${Math.floor(
        poll.yes,
      )}, No: ${Math.floor(poll.no)}</li>
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
         `;
    })
    .join('');

  const content = /*html*/ ` 
    <div class="banner">
        <div class="title">
            <h1>TechYEScracy</h1>
            <h1>404 - Page not Found</h1>
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
module.exports = notFound ;
