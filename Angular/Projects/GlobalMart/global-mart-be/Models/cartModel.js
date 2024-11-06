const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id:{
        type:Number, 
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number,
        },
        count:{
            type:Number
        }
    },
    userId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
       
    },
    grandTotal:{
        type:Number,
    }
})

const carts = mongoose.model('carts', cartSchema);
module.exports = carts;