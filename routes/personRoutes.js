const express = require('express');
const router= express.Router();
const Person=require('./../Person');
// ahha pe 2 files pichhe hai person save 

router.post('/',async(req,res)=>{
    try{
      const data=req.body //Assuming the requrest body contains the person data 

    const newPerson= new Person(data);  //we are inheriting data from person to newPers on 

   const response= await newPerson.save();
   console.log('data saved')
   res.status(200).json(response)


    }catch(err){
       console.log(err);
       res.status(500).json({error:' Internal Server Error'});
    }
})


      // fetching a data-------------------->>>>>>>>
router.get('/',async(req,res)=>{
    try{
         const data=await Person.find(); // it may take time to fetch the data
         console.log('data fetched successfully')
   res.status(200).json(data)

    }catch(err){
         console.log(err);
       res.status(500).json({error:' Internal Server Error'});
    }
})



router.get('/:workType',async(req,res)=>{
    try{
         const workType=req.params.workType;
         if(workType=='chef' || workType=='manager' || workType=='waiter')
         {
            const response=await Person.find({work: workType});
             console.log('resoponse fetched');
             res.status(200).json(response);
         }
         else{
            res.status(404).jason({error:'invalid work type'});
         }
    }catch(err){
   console.log(err);
       res.status(500).json({error:' Internal Server Error'});
    }
})
// hi comment is been added to check the git 
// PUT: Update person by ID
router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }

    console.log('Data updated');
    res.status(200).json(response); // FIXED: 'resoponse' → 'response'
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/:id',async(req,res)=>{
    try{
          const personId=req.params.id;
         
          const response=  await Person.findByIdAndDelete(personId);
          if(!response){
            return res.status(404).json({error:'User not found'});
          }
          console.log("deleted successfully");
          res.status(200).json(response);
    } catch(err){
          res.status(500).json({error:'Internal server error'})
          console.log(err);
    }
})

module.exports = router;
