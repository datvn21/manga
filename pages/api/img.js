import React from "react";
const axios = require("axios").default;

const img = async (req, res) => {
  let link = req.query.url;
  await axios
    .get(link, {
      headers: {
        Host: "nhanhtruyen.org",
        Referer: "http://www.nettruyenmoi.com/",
      },
    })
    .then(function (response) {
      // handle success
      console.log(response);
      res.send(response.data);
    });
};

export default img;
