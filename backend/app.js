const express=require('express');
const cors=require('cors');
const database=require('./database');
const student=require('./studentmodel');
const app=express();
const port=3000;
database();
app.use(express.json())
app.use(cors())


app.get('/users',async(req,res)=>{
    //res.json(users);
    try{  
    
      res.status(200).json(await student.find());
    }catch(err){
        res.status(500).json({message:err.message});
    }
})
 
app.post('/users',async(req,res)=>{
   try{
    const sdata=req.body;
    let sid=parseInt(Math.random()*10000);
    sdata.sid=sid;
    await student.create(sdata);
    res.status(200).json({message:"Student added successfully"});
   }catch(err){
    res.status(500).json({message:err.message})
   }
})



app.listen(port,()=>{
    console.log(`app is run at:${port}`)
})