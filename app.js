const CosmosClient = require('@azure/cosmos').CosmosClient;

const config = require('./config');
const url = require('url');

const endpoint = config.endpoint;
const masterKey = config.primaryKey;

const HttpStatusCodes = { NOTFOUND: 404 };

const databaseId = config.database.id;
const containerId = config.container.id;

const client = new CosmosClient({ endpoint: endpoint, auth: { masterKey: masterKey } });


async function createFamilyItem(itemBody) {
    console.log(`Got Json with id:\n${itemBody.id} `)
    const { item } = await client.database(databaseId).container(containerId).items.create(itemBody);
    console.log(`Created family item with id:\n${itemBody.id}\n`);
};
createFamilyItem(config.fromjs[0])
//createFamilyItem(config.items_old.Andersen)
//createFamilyItem(config.items.Second)
// async function queryContainer() {
//     console.log(`Querying container:\n${config.container.id}`);

//     // query to return all children in a family
//     const querySpec = {
//         query: "SELECT * FROM coll1"
//     };

//     const { result: results } = await client.database(databaseId).container(containerId).items.query(querySpec).toArray();
//     for (var queryResult of results) {
//         let resultString = JSON.stringify(queryResult);
//         console.log(`\tQuery returned ${resultString}\n`);
//     }
// };
// queryContainer()