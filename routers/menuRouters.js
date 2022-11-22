const express=require("express")
const router=express.Router();

// Import the controllers
const {home,createMenu, getMenu, getMenuParticular }=require("../controllers/menuControllers");

router.get("/",home);
router.post("/createMenu",createMenu);
router.get("/getMenu",getMenu);
router.get("/getMenuParticular/:id",getMenuParticular);

module.exports=router