const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({
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
    }
})

const wishlists = mongoose.model('wishlists', wishListSchema);
module.exports = wishlists;