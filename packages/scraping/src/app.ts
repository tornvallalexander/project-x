const express = require("express");
const { scrapeFollowers } = require("./controllers/scraping.controller");

const app = express();
const port = 4000;

app.get("/scrape", (req: any, res: any) => {
  const { username } = req.query;
  if (username) {
    scrapeFollowers(username).then((followers: any) => {
      res.json(followers);
    });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
