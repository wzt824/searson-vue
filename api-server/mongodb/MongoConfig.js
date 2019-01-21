
const mongoose = require("mongoose")

const DBURL = "mongodb://localhost:27017/myshop"
mongoose.connect(DBURL,{ useNewUrlParser: true })

mongoose.connection.on('connected',(error)=>{
    console.log("mongodb connected")
})


module.exports = mongoose
