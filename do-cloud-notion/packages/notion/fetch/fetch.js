const { Client } = require('@notionhq/client');

const NOTION_SECRET = "secret_FPl4YEg4NHlv8yAF5x1wwe1dq5OrjwvGcUYqj7ZaLTq";
const NOTION_DATABASE = "bc27d6aa1d1e4cf484e17de8839d8f24";

const notion = new Client({ auth: NOTION_SECRET });

async function main(args) {
    // return the first result
    const response = await notion.databases.query({
        database_id: NOTION_DATABASE,
        filter: {
            property: "Date",
            date: {
                on_or_after: new Date().toISOString(),
            },
        },
        sorts: [
            {
                property: "Date",
                direction: "ascending",
            },
        ],
    });

    /* return {
        body: {
            next: response.results[0].properties.Date.date.start,
        },
    }; */

    const result = response.results.filter((result) => {
        return result.properties.Retrouvailles.status
            && result.properties.Retrouvailles.status.name === "Oui";
    }).map((result) => {
        return {
            next: result.properties.Date.date.start,
            event: result.properties.Evenement.title[0].plain_text,
        }
    });

    return {
        body: result[0]
    };
}

exports.main = main;