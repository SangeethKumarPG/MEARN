const products = require('../Models/productModel')

exports.getAllProducts = async (req,res)=>{
    try{
        const allProducts = await products.find();
        res.status(200).json(allProducts)
    }catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
}

exports.addProduct = async (req, res)=>{
    try{
        console.log("Inside add product controller");
    }catch(err){
        res.status(500).json({message:err.message})
    }
}