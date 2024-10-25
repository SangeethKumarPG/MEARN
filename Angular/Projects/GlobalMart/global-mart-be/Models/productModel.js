const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
    }
})

const products = mongoose.model('products', productSchema);

module.exports = products;