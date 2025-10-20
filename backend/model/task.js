const mongoose=require("mongoose");
const taskschema=new mongoose.Schema({
  taskTitle:String,
  taskDesc:String,
  empName:String
})
module.exports=moongoose.model("Emp",taskschema);