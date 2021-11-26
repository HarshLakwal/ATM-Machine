const Connection = require("./Connetion");
const {ObjectId} = require("mongodb");
const depositModel = require("./depositModel");
const router = require("../Routes/options");


const withdraw =function(){
    
    this.debit=(id,debit,currentAmount,callback)=>{
        
        Connection((client)=>{
            
            var db = client.db("HarshBank")
            var total = (parseInt(currentAmount)) - (parseInt(debit));
            
            db.collection("user").updateOne({_id:ObjectId(id)},{$set:{amount:total}},(err,obj)=>{
                if(err){
                    callback(false)
                }
                else{
                    console.log(obj)
                    callback(obj)
                }
            })
        })
    }
}
module.exports = new withdraw();