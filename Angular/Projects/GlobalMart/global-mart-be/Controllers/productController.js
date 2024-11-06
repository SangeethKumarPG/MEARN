const products = require('../Models/productModel')
const wishlists = require('../Models/wishListModel');
const carts = require('../Models/cartModel');

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

exports.addToWishList = async(req, res)=>{
    // console.log("Inside addToWishList controller");
    // console.log("User Id:", req.user._id);
    const {id, title, price, description, category, image, rating} = req.body;
    const userId = req.user._id;
    // console.log(id, title, price, description, category, image, rating)
    try{
        const existingProduct = await wishlists.findOne({id,userId});
        if(existingProduct){
            res.status(406).json("Product already exists in wishlist");
        }else{
            // console.log("Inside else block")
            const newProduct = new wishlists({id, title, price, description, category, image, rating, userId});
            await newProduct.save();
            res.status(201).json(newProduct);
        }
    }catch(err){
        console.log(err);
    }
}

exports.getAllWishListItems = async(req, res)=>{
    try{
        const userId = req.user._id;
        const wishlistItems = await wishlists.find({userId});
        if(wishlistItems.length === 0){
            res.status(404).json("No wishlist items found");
        }else{
            res.status(200).json(wishlistItems);
        }
    }catch(err){
        console.log(err);
    }
}

exports.removeItemFromWishList = async(req, res)=>{
    console.log("Inside removeItemFromWishList controller");
    const {id} = req.params;

    try{
        const removeItem = await wishlists.findByIdAndDelete({_id:id});
        res.status(200).json(removeItem);
    }catch(err){
        console.log(err);
        res.status(401).json("Error removing item from wishlist");
    }
}

exports.addItemsToCart = async(req,res)=>{
    const userId = req.user._id;
    try {
        const {id, title, price, description, category, image, rating, quantity} = req.body;
        const existingProduct = await carts.findOne({id,userId});
        if(existingProduct){
            existingProduct.quantity += 1;
            existingProduct.grandTotal = existingProduct.price * existingProduct.quantity;
            // await existingProduct.save();
        }else{
            const newProduct = new carts({
                id:id,
                title:title,
                price:price,
                description:description,
                category:category,
                image:image,
                rating:rating,
                quantity:1,
                userId:userId,
                grandTotal:price
            });
            await newProduct.save();
            res.status(201).json(newProduct);
        }
    } catch (error) {
        console.log(error);
        res.status(401).json("Error adding items to cart");
    }
}