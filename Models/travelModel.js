const mongoose = require("mongoose")
const travelSchema =  mongoose.Schema({
    from:String,
    to:String,
    date:String,
    mode:String,
    members:String,
    expense:String
})
module.exports=mongoose.model("travel",travelSchema)