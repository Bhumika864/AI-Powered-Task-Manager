const mongoose=require("mongoose");
const empschema=new mongoose.Schema({
  empId:String,
  empName:String,
  empSkills:String
})
module.exports=moongoose.model("Emp",empschema);