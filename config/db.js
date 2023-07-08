const mongoose=require('mongoose')
const config=require('config')

const db=config.get('mongoURL') 


const connectDB=async()=>{
    try{
        await mongoose.connect(db)
        console.log("Database is connected....")
    }catch(err){
        console.error(err.error)

        process.exit(1)
    }
}

module.exports=connectDB