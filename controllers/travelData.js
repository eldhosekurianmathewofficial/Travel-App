const express=require("express")
const travelmodel=require("../Models/travelModel")
const router = express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let obj = new travelmodel(data)
    let result = await obj.save()
    res.json({
        status:"success"
    })
})
module.exports =router