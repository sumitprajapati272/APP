const mongoose=require('mongoose');
async function dbConn(){
    const conn= await mongoose.connect('mongodb+srv://Prashant:root@cluster0.jmlvdeu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    
    if(conn){
        console.log("Database connected successfully!!")
    }
    else{
        console.log("Database connection failure");
    }
}
module.exports=dbConn;