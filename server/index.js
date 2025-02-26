const express=require('express')
const mongoose=require('mongoose')
const taskroutes=require('./routes/taskroutes')
const cors=require('cors')
const app=express()

require('dotenv').config()

app.use(express.json())
app.use(cors())
app.use('/tasks',taskroutes)



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("database connected")
    app.listen(process.env.PORT,()=>{
        console.log("app is listening at Port",process.env.PORT)
    })
}).catch((err)=>{
    console.log(err)
})