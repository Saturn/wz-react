const express = require("express");
const request = require("request");
var cors = require("cors");
const app = express();
const port = 3999;
app.use(cors());

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

app.listen(port)
console.log(`Example app listening at http://localhost:${port}`);