const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("Api running")
})

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{console.log(`Surver is running on Port ${PORT}`)})