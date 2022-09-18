const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const articles = [{
        title:'Hello Title',
        body:'This is a body'
    },{
        title:'Hello Title Second',
        body:'This is a Second body'
    }]
    res.render('index', {articles: articles})
});

router.get('/new', (req, res) => {
    res.render('articles/new')
})


router.post('/new', (req, res) => {
    console.log(res.body)
})

module.exports = router;