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
router.get("/view",async(req,res)=>{
    let output=await travelmodel.find()
    res.json(output)
})
module.exports =router