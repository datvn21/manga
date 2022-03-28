const cheerio = require("cheerio"); // 1
const request = require("request-promise");
const puppeteer = require("puppeteer");

const truyenqqpro = async (link) => {
  const html = await request(link, (error, response, html) => {
    return html;
  });
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
  return { name, data };
};

const nettruyenmoi = async (link) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(link);
  let data = await page.evaluate(() => {
    let data = [];
    let n =
      document.getElementsByClassName("txt-primary")[0].children[1].innerText;
    let name =
      n.replace("- ", "") +
      " | " +
      document.getElementsByClassName("txt-primary")[0].children[0].innerText;
    let chapter = document.getElementsByClassName("page-chapter");
    for (img of chapter) {
      let linkImg = img.children[0].attributes[2].nodeValue;
      data.push("http:" + linkImg);
    }
    return { name, data };
  });
  await browser.close();
  return data;
};

const chap = async (req, res) => {
  let link = req.query.url;
  //res.json({ link });
  if (link.includes("truyenqqpro.com")) {
    res.json(await truyenqqpro(link));
  } else if (link.includes("nettruyenmoi.com")) {
    res.json(await nettruyenmoi(link));
  }
};
export default chap;
