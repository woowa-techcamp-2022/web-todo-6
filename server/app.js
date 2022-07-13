const express = require("express");
const apiRouter = require('./api')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

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

app.use('/api', apiRouter)

app.listen(process.env.PORT || 3000);
