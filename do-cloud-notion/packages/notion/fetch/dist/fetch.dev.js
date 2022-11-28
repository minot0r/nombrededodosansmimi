"use strict";

var _require = require('@notionhq/client'),
    Client = _require.Client;

var NOTION_SECRET = "secret_FPl4YEg4NHlv8yAF5x1wwe1dq5OrjwvGcUYqj7ZaLTq";
var NOTION_DATABASE = "bc27d6aa1d1e4cf484e17de8839d8f24";
var notion = new Client({
  auth: NOTION_SECRET
});

function main(args) {
  var response, result;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(notion.databases.query({
            database_id: NOTION_DATABASE,
            filter: {
              property: "Date",
              date: {
                on_or_after: new Date().toISOString()
              }
            },
            sorts: [{
              property: "Date",
              direction: "ascending"
            }]
          }));

        case 2:
          response = _context.sent;

          /* return {
              body: {
                  next: response.results[0].properties.Date.date.start,
              },
          }; */
          result = response.results.filter(function (result) {
            return result.properties.Retrouvailles.status && result.properties.Retrouvailles.status.name === "Oui";
          }).map(function (result) {
            return {
              next: result.properties.Date.date.start,
              event: result.properties.Evenement.title[0].plain_text
            };
          });
          return _context.abrupt("return", {
            body: result[0]
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

exports.main = main;