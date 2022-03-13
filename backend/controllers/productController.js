import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"

//This is the controller for the productRoutes, for cleaner productRoutes

//@desc Fetch all products
//@route Get /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})

//@desc Fetch single products
//@route Get /api/products/:
//@access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
})

export{
    getProducts, getProductById
}