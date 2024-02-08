const express =require("express")
const mongoose =require("mongoose")
const cors = require("cors")
const travelmod = require("./controllers/travelData")

const exp=express()

exp.use(express.json())
exp.use(cors())
mongoose.connect("mongodb+srv://eldhosekurianofficial:Jesusislove123@cluster0.ufrxpj4.mongodb.net/travelDB?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
exp.use("/api/travel",travelmod)
exp.listen(3001,()=>{
    console.log("Server Running")
})
