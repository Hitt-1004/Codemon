const express = require('express')
const router = express.Router()
const product = require('../models/product_model')

router.get('/allProducts', async (req, res) => {
    const productList = await product.find({})
    console.log(productList);
    res.send(productList)
}) 

router.post('/addProduct', async (req, res) => {
    try {
        const {name, description, price} = req.body
        const Product = new product({name, description, price})
        Product.save()
        res.status(200).json({success: "Product added successfully!", Product: Product})
    } catch (err) {
        console.log(err);
    }
})

router.post('/updatePrice/:id', async (req, res) => {
   try {
        const {price} = req.body
        const updatedDetails = await product.findByIdAndUpdate(req.params.id, {price: price}, {
            new: true,
            runValidators:false
          })
          console.log(updatedDetails)
        res.status(200).json({success: "Product updated successfully!", updatedDetails: updatedDetails})
    } catch (error) {   
        console.log(error);
    }
})

router.get('/getProductByID/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const Product = await product.findById(req.params.id)
        console.log(Product);
        res.status(200).json(Product)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router