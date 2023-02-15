const express=require("express");
const app=express();

app.get('/',function(req,res){
    res.send(' ( { key1: value })')
})

app.listen(3000,()=>{
    console.log(`sever run`)
})