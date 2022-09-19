const express = require('express')
const router = express.Router()
const Products = require('./../models/products')

router.get('/', async (req, res) => {
    
    
    const products = await Products.find()
    res.send({products: products})

})


router.post('/', async (req, res) => {
    const products = new Products({
        title: req.body.title,
        price: req.body.price
    })
    await products.save()
    res.send('product saved')
})



module.exports = router