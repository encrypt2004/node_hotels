

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db=require('./db');




const Event=require('./event');

const bodyParser=require('body-parser');// a middleware that store a data to req.body
 app.use(bodyParser.json());
//app.use(express.json()); // replaces bodyParser.json()


app.get('/', function(req,res){
        res.send('welcome to my hotel........how i can  help you?, we have list of menus')
})
app.post('/event', async(req,res)=>{
    try{
           const data=req.body;
           const newEvent=new Event(data);
           const response=await newEvent.save();

            console.log('data saved succesfully')
           res.status(200).json(response)
    }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal server error found'});
    }
})

    
// Start the server



// import ruoter files
const personRoutes = require('./routes/personRoutes');

app.use('/person',personRoutes);



const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

const jobRoutes=require('./routes/jobRoutes');
app.use('/job', jobRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

