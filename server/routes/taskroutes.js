const express=require('express')
const {gettask,addtask,deletetask,changeStatus,searchtask} =require('../controller/taskcontroller')
const router=express.Router()

router.get('/',gettask)

router.get('/query',searchtask)

router.post('/',addtask)

router.patch('/:id',changeStatus)

router.delete('/:id',deletetask)

module.exports=router