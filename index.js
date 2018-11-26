const parser = require("./parser.js");
const got = require('got');


const pageContent = {
  parseFromURL: async url => {
    const data = await got(url);
    if (!data.body) throw new Error("No valid HTML");
    return parser(data.body);
  },
  parseFromHTML: html => {
    return parser(html);
  }
};

module.exports = pageContent;
