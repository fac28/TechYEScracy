const { layout } = require("./layout.js");

function form() {
  const title = "AddPoll";

  const content = /*html*/ ` 
      <div class="banner">
          <div class="title">
              <h1>Add Poll</h1>
          </div>
          <div class="">
              
              <form action='/form' method= 'POST'  >
              <label for="question"> Poll Question 
                <span aria-hidden="true">*</span>
              </label>
              
              <textarea id= "question" name="question"  rows ="5" maxlength = "500" required></textarea>
            
              <button type ="submit">Submit</button>
              </form>
          </div>
      </div>
      `;

  return layout({ title, content });
}
module.exports = { form };
