const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`
        <html>
            <head></head>
            <body>
                <h1>hello world</h1>
            </body>
        </html>
    `);
});

app.listen(process.env.PORT || 3000);
