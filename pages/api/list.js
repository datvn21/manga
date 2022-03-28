const cheerio = require("cheerio"); // 1
const request = require("request-promise");
const puppeteer = require("puppeteer");

const truyenqqpro = async (link) => {
  const html = await request(link, (error, response, html) => {
    return html;
  });
  let data = [];
  const $ = cheerio.load(await html);
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
  return { name, avatar, info, list: data };
};

const nettruyenmoi = async (link) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(link);
  let data = await page.evaluate(() => {
    let data = [];
    let name = document.getElementsByClassName("title-detail")[0].outerText;
    let avatar =
      document.getElementsByClassName("col-image")[0].children[0].currentSrc;
    let info =
      document.getElementsByClassName("detail-content")[0].children[1]
        .outerText;
    let chapter = document.getElementsByClassName("col-xs-5 chapter");
    for (chap of chapter) {
      data.push({ name: chap.innerText, chap: chap.children[0].href });
    }
    return { name, avatar, info, list: data };
  });
  await browser.close();
  return data;
};

const list = async (req, res) => {
  let link = req.query.url;
  //res.json({ link });
  if (link.includes("truyenqqpro.com")) {
    res.json(await truyenqqpro(link));
  } else if (link.includes("nettruyenmoi.com")) {
    res.json(await nettruyenmoi(link));
  }
};
export default list;
