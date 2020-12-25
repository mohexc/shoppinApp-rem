const express = require('express')
const products = require('./data/product')

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.json(prodcuts)
})

app.get('/api/prodcuts/:id', (req, res) => {
    const product = products.find((product) => product._id === req.params.id)
    res.json(product)
})