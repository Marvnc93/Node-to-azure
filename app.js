const CosmosClient = require('@azure/cosmos').CosmosClient;

const config = require('./config');
const url = require('url');

const endpoint = config.endpoint;
const masterKey = config.primaryKey;

const HttpStatusCodes = { NOTFOUND: 404 };

const databaseId = config.database.id;
const containerId = config.container.id;

const client = new CosmosClient({ endpoint: endpoint, auth: { masterKey: masterKey } });

async function createContainer() {
    const { container } = await client.database(databaseId).containers.createIfNotExists({ id: containerId });
    console.log(`Created container:\n${config.container.id}\n`);
}

// async function createFamilyItem(itemBody) {
//     const { item } = await client.database(databaseId).container(containerId).items.create(itemBody);
//     console.log(`Created item with id:\n${itemBody.id}\n`);
// };
async function createFamilyItem(itemBody) {
    try {
        // read the item to see if it exists
        const { item } = await client.database(databaseId).container(containerId).item(itemBody.id).read();
        console.log(`Item with family id ${itemBody.id} already exists\n`);
    }
    catch (error) {
        // create the family item if it does not exist
        if (error.code === HttpStatusCodes.NOTFOUND) {
            const { item } = await client.database(databaseId).container(containerId).items.create(itemBody);
            console.log(`Created family item with id:\n${itemBody.id}\n`);
        } else {
            throw error;
        }
    }
};

async function queryContainer() {
    console.log(`Querying container:\n${config.container.id}`);

    // query to return all children in a family
    const querySpec = {
        query: "SELECT VALUE c.id FROM c WHERE c.Temperature >@Temp",
        parameters: [
            {
                name: "@Temp",
                value: 23
            }
        ]
    };

    const { result: results } = await client.database(databaseId).container(containerId).items.query(querySpec).toArray();
    for (var queryResult of results) {
        let resultString = JSON.stringify(queryResult);
        console.log(`\tQuery returned ${resultString}\n`);
    }
};

createContainer();
config.fromjs.forEach(function(element,index){
    //createFamilyItem(config.fromjs[index])
});
queryContainer();
//createFamilyItem(config.fromjs[0])

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