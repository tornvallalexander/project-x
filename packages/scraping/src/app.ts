const express = require("express");
const { scrapeFollowers } = require("./controllers/scraping.controller");

const app = express();
const port = 4000;

app.get("/scrape", scrapeFollowers);

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
