const express = require("express");
const request = require("request");
const path = require("path");

var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.get("/wz/:username/:platform", (req, res) => {
  const endpoint = `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/${req.params.username}/${req.params.platform}`;
  const options = {
    method: "GET",
    url: endpoint,
    headers: {
      "x-rapidapi-key": "eCG9Qkgi2wmsh8XzfMLfKZWVQ4TDp1gOPiwjsn284ac6LiOYnq",
      "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
      useQueryString: true,
    },
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.send(error);
    }
  });
});

+app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3333);

console.log(`Running`);
