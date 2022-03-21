const cheerio = require("cheerio"); // 1
const request = require("request-promise");

const chap = async (req, res) => {
  let link = req.query.url;
  //res.json({ link });
  await request(link, (error, response, html) => {
    let data = [];
    const $ = cheerio.load(html);
    let na = $(".detail-title").text().split("- Chapter");
    let name = "Chapter" + na[1] + " | " + na[0];
    $(".page-chapter").each((index, img) => {
      // const job = $(el).find('.job__list-item-title a').text();
      let chap = $(img).find("img").attr("data-cdn");
      if (chap != undefined) {
        data.push(chap);
      }
    });
    //console.log(data);
    res.json({ name, data });
  });
};
export default chap;
