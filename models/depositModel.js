const Connection = require("./Connetion")
const { ObjectId } = require("mongodb")
const deposit = function () {
    this.moneyDeposit = (id,total, callback) => {
        
        Connection((client) => {
            var db = client.db("HarshBank")
            db.collection('user').updateOne({_id:ObjectId(id)},({$set:{amount:total}}),(err,result)=>{
                if(err){
                    callback(false)
                }
                else{
                    callback(true )
                }
            })

        })
    }
}
module.exports = new deposit({
    moneyDeposit:this.moneyDeposit
});