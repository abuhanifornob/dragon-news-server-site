const express=require('express')
const app=express();
const port=process.env.PORT || 5000;
 
const category=require("./data/category.json");

app.get("/",(req,res)=>{
    res.send("News API Runing")
})
app.get("/news-category",(req,res)=>{
    res.send(category);
}) 

app.listen(port,()=>{
    console.log("Dragon surver running",port);
})