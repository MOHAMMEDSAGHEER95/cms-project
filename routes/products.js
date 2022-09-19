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

router.post('/edit/:id', async (req, res) => {
    await Products.findByIdAndUpdate(req.params['id'], {price: req.body.price})
    res.send(`product edit ${req.params['id']}`)
})



router.delete('/delete/:id', async (req, res) => {
    await Products.findByIdAndDelete(req.params['id'])
    res.send(`products deleted ${req.params['id']}`)
})

module.exports = router