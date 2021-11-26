const Connection = require("./Connetion");

const Account = function(){
    
    this.creatAccount = (data,callback)=>{
        Connection((client)=>{
            var db = client.db("HarshBank");
            db.collection("user").insertOne(data,(err)=>{
                client.close();
                if(err){
                    callback(false)
                }
                else{
                    callback(true)
                }
            })
        })
    }
    this.verification = (data,callback)=>{
        Connection((client)=>{
            var db = client.db("HarshBank")

            db.collection("user").findOne(data,(err,obj)=>{
                if(err || obj== null){
                    callback(false)
                }
                else{
                callback(obj)
                }
            })
        })
    }
}
module.exports = new Account();