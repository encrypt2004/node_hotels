const express = require('express');
// const router=expess.Router();

// const express = require('express'); // ✅ correct import
const router = express.Router();


//ahha pe menu 2 files pichhe hai
const Menu=require('./../menu');
// const Person=require('./../Person');



router.post('/', async(req,res)=>{
    try{
           const data=req.body

           const newMenu= new Menu(data);

           const response=await newMenu.save();
           console.log('data saved succesfully')
           res.status(200).json(response)


    }catch(response){
            console.log(err);
            res.status(500).json({error:'Internal server Error'})
    }
})



// now to its time to fetch the data from menu

router.get('/',async(req,res)=>{
    try{
         const data = await Menu.find();
res.status(200).json(data);

    }catch(err){
           console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


//  enum:['starter','main course','dessert','beverage'],
router.get('/:categoryType',async(req,res)=>{
    try{
          // const workType=req.params.workType;
          const categoryType=req.params.categoryType;
          if(categoryType=='starter' || categoryType=='main course' || categoryType=='desert' || categoryType=='beverage')
          {
             const response=await Menu.find({category: categoryType});
                          console.log('resoponse fetched');
                          res.status(200).json(response);
          }
          else{
            res.status(404).json({error:'Invalid type category is found'})
          }
    } catch(err){
         console.log(err);
         res.status(500).json({error:'Internal server problems'})
    }
})



router.put('/:id' ,async(req,res)=>{
   try{
          const idTUpdated=req.params.id;
          const  UpdatedMenuData=req.body;
          const response= await Menu.findByIdAndUpdate(idTUpdated,UpdatedMenuData,{
               new: true,
      runValidators: true,
          });
          if(!response){
             return  res.status(404).json({error:'Person not found'})
          }
          console.log('data updated successfully');
          res.status(200).json(response);
   }
   catch(err){
       console.log(err);
       res.status(500).json({error:'internal server error'});
   }
})



router.delete('/:id',async(req,res)=>{
    try{
         const menuId=req.params.id;
         const response=await Menu.findByIdAndDelete(menuId);
         if(!response){
          return res.status(404).json({error:'Person not found'});
         }
         console.log("deleted successfully");
          res.status(200).json(response);
    }catch(err){
          console.log(err);
          res.status(500).json({error:'Internal server Issues'})
    }
})
module.exports=router;