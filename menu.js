const mongoose=require('mongoose');

const menuSchema= new mongoose.Schema({
     itemName:{
        type:String,
        required:true
     },
     description:{
           type:String
     },
     price:{
        type:Number,
        required:true
     },
     category:{
        type:String,
        enum:['starter','main course','dessert','beverage'],
        required:true
     },
     isAvailable:{
        type:Boolean,
        defalult:true
     },
 rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    ingredients: {
        type: [String],  // Array of strings
        default: []
    },
    imageUrl: {
        type: String  // You can store image URL if using image hosting
    }
}, { timestamps: true });  // Automatically adds createdAt and updatedAt


const Menu=mongoose.model('menu',menuSchema);
module.exports=Menu;