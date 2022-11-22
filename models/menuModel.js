const mongoose=require("mongoose");


const menuSchema=mongoose.Schema({
    itemName:{
        type:String,
        require:true

    },
    price:{
        type:Number,
        require:true
    }

})

module.exports=mongoose.model("menucurd",menuSchema);
