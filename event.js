const mongoose=require('mongoose');

const eventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    college_company:{
        type:String,
        
    },
    session:{
        type: String,
        enum:["morning","afternoon","evening"],
        required:true,
    }
})
const Event= mongoose.model('event',eventSchema);
module.exports=Event;