const Connection = require("./Connetion")
const {ObjectId} = require("mongodb")
const infoList = function(){

    this.showInfo =(data,callback)=>{
        Connection((client)=>{
            
            var db = client.db("HarshBank");
            var where = {_id:{$eq:ObjectId(data)}}
            db.collection("user").findOne(where,(err,data)=>{
                
                if(err){
                    callback(err)
                }
                else{
                    callback(data)
                }
            })
        })
    }
}
module.exports = new infoList();