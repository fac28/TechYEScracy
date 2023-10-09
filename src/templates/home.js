const { layout } = require('./layout.js');

function home() {
    const title = 'TechYEScracy';
    const content = /*html*/ ` 
    <div class="banner">
        <div class="title">
            <h1>TechYEScracy</h1>
        </div>
    
    </div>
    `;

    return layout({ title, content });
}
module.exports = { home, users };