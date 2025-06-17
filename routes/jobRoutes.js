const express=require('express')

const router= express.Router();
const Jobs= require('./../job');
const { findByIdAndDelete } = require('../event');


router.get('/', async(req,res)=>{
    try{
           const response=await Jobs.find()
           res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})



router.post('/',async(req,res)=>{
    try{
           const data=req.body;
           const newJob=new Jobs(data);
           const response=await newJob.save();
           res.status(200).json(response);
          console.log('data saved succesfully')
         
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})

router.put('/:id',async(req,res)=>{
    try{
           const jobId=req.params.id;
          const  jobUpdatedData=req.body;

          const response=await Jobs.findByIdAndUpdate(jobId,jobUpdatedData,{
             new: true,
             runValidators: true,
          });
          if(!response){
            return res.status(404).json({error:'user does not found with this id'});
          }
          console.log('updated successfully')
          res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
           const jobId=req.params.id;
           const response= await Jobs.findByIdAndDelete(jobId);
             if(!response){
          return res.status(404).json({error:'Person not found'});
         }
           res.status(200).json(response);
           console.log('deleted successfully')
    }catch(err){
          console.log(err);
          res.status(500).json({error:'Internal server error'});
    }
})


module.exports = router;