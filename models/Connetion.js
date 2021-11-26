const Connection = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"

function getClient(callback){
    Connection.connect(url,(err,client)=>{
        callback(client);
    })
}
module.exports = getClient;