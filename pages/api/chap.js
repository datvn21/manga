const cheerio = require("cheerio"); // 1
const request = require("request-promise");

const chap = async (req, res) => {
  let link = req.query.url;
  //res.json({ link });
  await request(link, (error, response, html) => {
    let data = [];
    const $ = cheerio.load(html);
    $(".page-chapter").each((index, img) => {
      // const job = $(el).find('.job__list-item-title a').text();
      let chap = $(img).find("img").attr("data-cdn");
      if (chap != undefined) {
        data.push(chap);
      }
    });
    console.log(data);
    res.json({ data });
  });
};
export default chap;
