const path = require("path")
const express = require("express")
const app = express()
// const mongoose = require("mongoose")
const CartsModel = require("./mongodb/CartsModel")

app.use(express.static(path.resolve(__dirname,"../")))


app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../","index.html"))
})

app.get("/api/carts",(req,res)=>{
   CartsModel.findOne({"userid":2},(err,results)=>{
       res.json(results)
   })
})


// app.listen(3000,(error)=>{
//     console.log("server is ready on port 3000")
// })
