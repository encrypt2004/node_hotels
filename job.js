const mongoose=require('mongoose')

const jobSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
         type:String,
        required:true,
        // unique:true
    },
    phone:{
         type:String,
        required:true
    },
    position:{
         type:String,
        required:true,
        enum:['hr','developer','devhops','cloudeEngineer','pr','design']
    },
    resumelink:{
        type:String,
        required:true
    },
    experienceYears:{
         type:Number,
         default:0
    },
    coverLetter:{
        type: String,
    },
    dateApplied:{
        type:Date,
        default:Date.now 
    }
});
const Jobs=mongoose.model('Jobs',jobSchema);
module.exports=Jobs;