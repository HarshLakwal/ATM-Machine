const Connection = require("./Connetion");
const {ObjectId} = require("mongodb");
const pinChange = function(){
    this.changePin = (id,data,orgPassword,oldPin,callback)=>{
        Connection((client)=>{
            var db = client.db("HarshBank")
            
           if(oldPin == orgPassword){
            db.collection('user').updateOne({_id:ObjectId(id)},{$set:{password:data}},(err,result)=>{
                if(err)
                {
                   callback(err)
                }
                else{
                    callback(true)
                }
            })
        }
        else{
            callback(false)
        }
        })
    }
}
module.exports = new pinChange();