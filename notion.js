module.exports = {
  probeDatabase,
}

require('dotenv').config()
const { Client } = require("@notionhq/client");


async function probeDatabase(uuid){

  const NOTION_AUTH_TOKEN = process.env.NOTION_AUTH_TOKEN;
  // Initializing a client
  const notionClient = new Client({
    auth: NOTION_AUTH_TOKEN
  });

  const databaseID = process.env.DATABASE_ID;

  keyword = uuid.replaceAll(`"`,``);
  
  const response = await notionClient.databases.query({
    database_id: databaseID,
    filter: {
      property: "Keyword",
      formula: {
        string: {
          equals: keyword,
        }
      }
    }
  })

  console.log(response.results[0]);

  if (response.results < 1) {
    console.log("No results were found.");
    return '404';
  } else if (response.results > 1) {
    console.log("Problem with databse entries. Duplicate entry found. UUID: " + response.results[0].properties.Keywork.text);
    return '400';
  } else {
    return response.results[0].properties.URL.url
  }
}
//probeDatabase("7631ba53");

 /*
filter: {
  property: "{INSERT PROPERTY NAME}",
  {type}: {
    {condition}: "{state}"
  }
}
*/