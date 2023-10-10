const { layout } = require('./layout.js');

function home(LOGIN_URL,user) {
    const title = 'TechYEScracy';
    let logIn = `<a href="${LOGIN_URL}">Log in with GitHub</a>`;
    if (user) {
        logIn = `
        <h2><img src=${user.avatar_url}>${user.login} Followers: ${user.followers}</h2>
        <form action="/log-out" method="post"><button>Log out</button></form>`;
    }
    const content = /*html*/ ` 
    <div class="banner">
        <div class="title">
            <h1>TechYEScracy</h1>
        </div>
        <div class="">
            ${logIn}
        </div>
    </div>
    `;

    return layout({ title, content });
}
module.exports = { home };