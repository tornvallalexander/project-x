const axios = require("axios");
const cheerio = require("cheerio");
const { saveUserFollowers } = require("../controllers/database.controller");

const scrapeFollowerInformation = async (username: string) => {
  const { data } = await axios.get(`https://github.com/${username}`);
  const $ = cheerio.load(data);
  const listItemsNames = $(".vcard-names");
  let name: any = "";

  const listItemsBio = $(".js-profile-editable-area");
  let bio: any = "";

  await listItemsBio.each((idx: any, el: any) => {
    bio = $(el).children(".p-note").text().replace(/ +/g, " ");
  });

  await listItemsNames.each((idx: any, el: any) => {
    name = $(el).children(".p-nickname").text().replace(/\s/g, "");
  });

  return { name: name, bio: bio };
};

export const scrapeFollowers = async (req: any, res: any) => {
  const { username } = req.query;

  if (username) {
    const { data } = await axios.get(
      `https://github.com/${username}?tab=followers`
    );
    const $ = cheerio.load(data);
    const listItemsFollowers = $(".d-table");
    let followers: any = [];

    await listItemsFollowers.each((idx: any, followerContainer: any) => {
      $(followerContainer)
        .children(".d-table-cell")
        .each((idx: any, informationContainer: any) => {
          $(informationContainer)
            .children(".d-inline-block")
            .each((idx: any, namesContainer: any) => {
              followers.push(
                $(namesContainer)
                  .children(".Link--secondary")
                  .text()
                  .replace(/\s/g, "")
                  .trim()
              );
            });
        });
    });

    followers = await followers.filter(Boolean);

    let followersInfo: any = [];

    await followers.forEach(async (follower: string) => {
      await scrapeFollowerInformation(follower).then(async (info) => {
        followersInfo = [...followersInfo, info];
      });

      if (followersInfo.length === followers.length) {
        saveUserFollowers(username, followersInfo);
        res.json(followersInfo);
      }
    });
  } else {
    res.json("Invalid username");
  }
};

console.log("heybye");
