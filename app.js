require('dotenv').config();
require('./config/db').connect();
const express=require('express');
const menuRoutes=require('./routers/menuRouters')
const app=express();

//Export The route

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//
app.use('/',menuRoutes);


module.exports=app;
