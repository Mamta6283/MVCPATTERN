const express=require('express')

const router=express.Router()
const {getProducts, updateProducts, createProduct, deleteProduct}=require('./controller/ProductController.js')

router.get('/products',getProducts)

router.post('/products',createProduct)

router.put('/products/:id',updateProducts)
router.delete('/products/:id',deleteProduct)
module.exports=router

