
const { findById } = require("../models/menuModel")
const Menu=require("../models/menuModel")

exports.home= (req,res) =>
{
    res.send("Hello Am Abhihske")
}
// createMenu

exports.createMenu=(req,res)=>
{
    const{itemName, price}=req.body
    //
    if(!(itemName && price))
    {
       res.status(404).send("Both the fields are required")
    }
    
    const menu= Menu.create({
        itemName:itemName,
        price:price
    })

    res.status(201).json({
        success:true,
        message:"menu added SuccessFull",
        menu
    })
}

exports.getMenu= async (req,res)=>
{
       const Menus =await Menu.find();
       res.status(201).json({
        Menus
       })

}
exports.getMenuParticular= async (req,res)=>
{
       const Menuu = await Menu.findById(req.params.id)
       res.status(201).json({
        Menuu
       })

}
exports.getMenuParticular= async (req,res)=>
{
       const Menuu = await Menu.findById(req.params.id)
       res.status(201).json({
        Menuu
       })

}