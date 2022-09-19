const express = require('express')
const articleRouter = require('./routes/articles')
const productRouter = require('./routes/products')
const app = express()
const fruit = 'apple';

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}));
app.use('/articles', articleRouter)
app.use('/products', productRouter)




app.get('/', (req, res) => {
    res.render('index', {key: 'Home'})
})

app.get('/hello', (req, res) => {
    res.send(req.path)
})

// app.get('/:id', (req, res) => {
//     res.send(req.path);
// })

app.get(`/${fruit}`, (req, res) => {
    res.send(req.path)
})

app.get(`/fruit/${fruit}`, (req, res) => {
    res.send(req.path)
})

app.listen(3000)