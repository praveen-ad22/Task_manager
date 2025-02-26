const mongoose=require('mongoose')


const taskdata=new mongoose.Schema({
    taskid:{
    type:String,
    required:true
    },
    clicked:{
        type:Boolean,
        default:false
    },
    work:{
        type:String,
        required:true
    }
})


const task=mongoose.model('Task',taskdata)

module.exports=task