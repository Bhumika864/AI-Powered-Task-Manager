const express=require("express");
const mongoose=require("mongoose");
const app=express();
const PORT=process.env.PORT||5500;
app.listen(PORT,()=>console.log("Server running on PORT",PORT));