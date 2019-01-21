const mongoose = require("./MongoConfig")

const Schema = mongoose.Schema;

let CartsSchema = new Schema({
    "userid" : {type:Number},
    "totalPrice" : {type:Number},
    "checked" : {type:Boolean},
    "shops":{type:Object}
})

let CartsModel = mongoose.model("carts",CartsSchema)


module.exports = CartsModel
