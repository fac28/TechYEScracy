function layout({ title, content }) {
    return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="normalize.css">
      <link rel="stylesheet" href="styles.css">
       <!-- Favicons -->
       <link rel="icon" href="/images/judge-32.png">
       <link rel="icon" href="/images/judge-96.png">

        </head>
        <body>
            <main>
              ${content}
            </main>
          </div>
        </body>
      </html>
    `;
  }

  module.exports = { layout };