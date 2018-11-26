const parser = require("./parser.js");
const request = require('request-promise');


const pageContent = {
  parseFromURL: async url => {
    const data = await request.get(url);
    if (!data.body) throw new Error("No valid HTML");
    return parser(data.body);
  },
  parseFromHTML: html => {
    return parser(html);
  }
};

module.exports = pageContent;
