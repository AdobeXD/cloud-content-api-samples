const express = require("express");
const app = express();
const session = require("express-session");
const request = require("request-promise");
const https = require("https");
const bodyParser = require("body-parser");
const apiKey = require("../public/config.js").apiKey;
const accessToken = require("../public/config.js").accessToken;
const fs = require("fs");
const path = require("path");

/* Declare host name and port */
const hostname = "localhost";
const port = 8000;

/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "jade");
app.use(
  session({
    /* Change this to your own secret value */
    secret: "this-is-secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 6000000
    }
  })
);

/* Routes */
app.get("/", function(req, res) {
  res.render("index");
});

app.post("/document", function(req, res) {
  const documentId = req.body.documentId;
  let requestOptions = {
    uri: `https://xdce.adobe.io/v2/document/${documentId}`,
    headers: {
      "x-api-key": apiKey,
      Authorization: `Bearer ${accessToken}`,
      accept: "application/vnd.adobe.xd.v1+json"
    },
    json: true
  };

  /* Send a GET request using the request library */
  request(requestOptions)
    .then(function(response) {
      /* Send the received response back to the client side */
      res.render("index", { response: JSON.stringify(response) });
    })
    .catch(function(error) {
      res.render("index", { response: error });
    });
});

/* Set up a HTTS server with the signed certification */
https
  .createServer(
    {
      key: fs.readFileSync(path.join(__dirname, "key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "cert.pem"))
    },
    app
  )
  .listen(port, hostname, err => {
    if (err) console.log(`Error: ${err}`);
    console.log(`listening on port ${port}!`);
  });
