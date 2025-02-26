const task=require("../model/task")
const {v4:uuid}=require('uuid')
const gettask=async (req,res) =>{
    try {
       const response=await task.find()
       res.status(200).json(response)
    } catch (error) {
        
    }
} 
const searchtask=async(req,res)=>{
     const {search}=req.query
    try {
        const response=await task.find({
         work:{$regex:search,$options:'i'}
        })
        res.status(200).json(response)
    } catch (error) {
        
    }
}
const addtask=async (req,res)=>{
    try {
        const {work,clicked}=req.body
        const newtask=new task({
            taskid:uuid(),
            clicked,
            work,
        })
        await newtask.save()
        res.status(200).json({message:"task is registered"})
    } catch (error) {
        
    }
}  
const changeStatus=async (req,res)=>{
       const { id } = req.params
       const {clicked}=req.body
       console.log((clicked))
    try {
    const upd=await task.findOneAndUpdate(
        {taskid:id},
        {clicked:clicked},
        {new:true})
    if(upd){
 res.status(200).json({ message: 'status is changed'})
    }
    
    else{
        res.status(400).json({ message: 'status is not changed' })
    }
    } catch (error) {
        
    }
}
const deletetask=async(req,res)=>{
     const {id}=req.params
     try {
        const del= await task.findOneAndDelete({taskid:id})

        res.status(200).json({message:"task is deleted"})
     } catch (error) {
        res.status(400).json({error})
     }
}
module.exports={
    gettask,
    addtask,
    changeStatus,
    deletetask,
    searchtask
}