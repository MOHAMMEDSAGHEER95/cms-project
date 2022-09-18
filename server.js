const express = require('express')
const app = express()
const fruit = 'apple';
app.get('/', (req, res) => {
    res.send("hello");
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