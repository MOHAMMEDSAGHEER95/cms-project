const express = require('express')
require('dotenv').config()
const router = express.Router()
const mongoose = require('mongoose')
const Article = require('./../models/article')

mongoose.connect(process.env.MONGO_URI)

router.get('/', async (req, res) => {
    const articles = await Article.find()
    res.render('index', {articles: articles})
});

router.get('/new', (req, res) => {
    res.render('articles/new')
})


router.post('/new', async (req, res) => {
    console.log('creating post')
    console.log(req.body)



    const article = new Article({
        title: req.body.title, 
        body: req.body.title, 
    })
    await article.save()
    res.redirect('/articles')

})

router.delete('/:id', async (req, res) => {
    await Article.deleteOne({ _id: req.params['id'] });
    console.log(req.params['id'])
    res.send({message:'Thanks'})
})

router.post('/edit/:id', async (req, res) => {
    console.log(req.body)
    const oldDocument = await Article.updateOne({_id: req.params['id']},{title: req.body.title})
    const article = await Article.findById({_id: req.params['id']})
    res.send({article: article, id: req.params['id']})
})

module.exports = router;