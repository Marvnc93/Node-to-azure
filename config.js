var config = {}
var json = require("./data_small.json")
config.endpoint = "https://mczdb.documents.azure.com:443/";
config.primaryKey = "hE3lHT6PeBaQJlYIPXY4e4AYwSbhK9qJ4uNwHWwuuLU7hxyf4FYcwcwC76oXJiCj4dNNas5rxyC7gYk0cPMeOA==";
config.database = {
    "id": "db1"
};

config.container = {
    "id": "coll1"
};
// id's need to be strings
config.fromjs = json
config.items= {
    "First": {
        "id": "4864711",
        "TopicName": "SEN15",
        "Temperature": 32,
        "Humidity": 18,
    },
    "Second": {
        "id": "4864311",
        "TopicName": "SEN15",
        "ReceivedDate": "2018-11-30T17:08:41.000Z",
        "Temperature": 32,
        "Humidity": 18,
        "IsActive": true,
        "CreatedBy": null,
        "CreatedOn": "2018-11-30T17:05:52.710Z",
        "ModifiedBy": null,
        "ModifiedOn": "2018-11-30T17:05:52.710Z"
    },
    "Third":{
        "id": 4864711,
        "TopicName": "SEN15",
        "ReceivedDate": "2018-11-30T17:08:41.000Z",
        "Temperature": 32,
        "Humidity": 18,
        "IsActive": true,
        "CreatedBy": null,
        "CreatedOn": "2018-11-30T17:05:52.710Z",
        "ModifiedBy": null,
        "ModifiedOn": "2018-11-30T17:05:52.710Z"
    }
};

config.items_old = {
    "Andersen": {
        "id": "Anderson.1",
        "lastName": "Andersen",
        "parents": [{
            "firstName": "Thomas"
        }, {
                "firstName": "Mary Kay"
            }],
        "children": [{
            "firstName": "Henriette Thaulow",
            "gender": "female",
            "grade": 5,
            "pets": [{
                "givenName": "Fluffy"
            }]
        }],
        "address": {
            "state": "WA",
            "county": "King",
            "city": "Seattle"
        }
    },
    "Wakefield": {
        "id": "Wakefield.7",
        "parents": [{
            "familyName": "Wakefield",
            "firstName": "Robin"
        }, {
                "familyName": "Miller",
                "firstName": "Ben"
            }],
        "children": [{
            "familyName": "Merriam",
            "firstName": "Jesse",
            "gender": "female",
            "grade": 8,
            "pets": [{
                "givenName": "Goofy"
            }, {
                    "givenName": "Shadow"
                }]
        }, {
                "familyName": "Miller",
                "firstName": "Lisa",
                "gender": "female",
                "grade": 1
            }],
        "address": {
            "state": "NY",
            "county": "Manhattan",
            "city": "NY"
        },
        "isRegistered": false
    }
};

module.exports = config;