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

exports.getProductById = async (req, res)=>{
    try{
       const productId = req.params;
       const id = parseInt(productId.id);
       const product = await products.findOne({id});
       if(!product){
           return res.status(404).json({message:"Product not found"})
       }else{
           res.status(200).json(product);
       }
    }catch(err){
        console.log(err);
        res.status(500).json({message:err.message})
    }
}