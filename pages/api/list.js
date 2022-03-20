const cheerio = require("cheerio"); // 1
const request = require("request-promise");

const list = async (req, res) => {
  let link = req.query.url;
  //res.json({ link });
  await request(link, (error, response, html) => {
    let data = [];
    const $ = cheerio.load(html);
    let name = $(".book_other").find("h1").text();
    let avatar = $(".book_avatar").find("img").attr("src");
    let info = $(".story-detail-info").find("p").text();
    $(".works-chapter-item").each((index, chap) => {
      // const job = $(el).find('.job__list-item-title a').text();
      let l = {
        name: $(chap).find("a").text(),
        chap: $(chap).find("a").attr("href"),
      };
      data.push(l);
    });
    console.log(data);
    res.json({ name, avatar, info, list: data });
  });
};
export default list;
