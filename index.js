const express = require("express");
const path = require("path");
let app = express();

app.use(express.static(path.join(__dirname + "/dist")));

//Redirect all req that to server to index.html
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
