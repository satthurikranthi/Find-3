const mongoose = require("mongoose");
const express = require("express");
const cors =require("cors");


const app = express();
app.use(cors());

app.get("/getEmployees",async (req,res)=>{
 let employeesData =  await Employee.find()
 //.distinct("country");
 //.sort("-age");
 //.select("age","department-_id");
 //.and([
  //  {country:"china"},
  //  {gender:"Male"},
  //  {age: { $gte: 21, $lte: 50 }},
//]);
//and([
   // {country:"russia"},
   // {gender:"Male"},
   // {age: { $gte: 21, $lte: 50 }},
//])
//.countDocuments();
 //limit(25).skip(23);
 res.json(employeesData);
});



app.listen(1586,()=>{
    console.log("Listening to port 1586");
})



let employeeSchema = new mongoose.Schema({
id:Number,
firstName:String,
lastName:String,
email:String,
gender:String,
country:String,
age:Number,
department:String,
profilepic:String

});

let Employee = new mongoose.model("employ",employeeSchema,"employ");



let connectToMDB = async ()=>{

try{


 await  mongoose.connect("mongodb+srv://satthurikranthi:anvira@cluster0.q79l2.mongodb.net/dummy?retryWrites=true&w=majority&appName=Cluster0");


 console.log("Connect to MDB successfully.");

}catch(err){


 console.log(" unable to Connect to MDB .");

}








}

connectToMDB();
