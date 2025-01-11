const mongoose=require('mongoose');

const tourSchema=mongoose.Schema({
    
    place:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },

    tags:{
        type:[String],
        required:true
    }
})

const tourModel=mongoose.model('newtour',tourSchema);

module.exports=tourModel;