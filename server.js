import express from 'express'
import fs from 'fs'
import multer from 'multer'
import mongoose from 'mongoose'
import Product from './models/Product.js'

const app = express()

const upload = multer({dest: 'public/image'})

await mongoose.connect('mongodb://localhost:27017/')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.render('index', {
        tomy:  "ahh le le le ahh le las",
        cssname: "product"
    })
})


app.get('/products', async (req, res) => {
    const myproducts = await Product.find()
    

    res.render('products', {
        tomy: 'Producti',
        cssname: 'product',
        products: myproducts
    })
})

app.get('/cart', (req, res) => {
    res.render('cart', {
        tomy: 'Cart',
        cssname: 'cart'
    })
})
app.get('/products/add', (req, res) => {
    res.render('add-product', {
        tomy: 'add',
        cssname: 'add-product'
    })
})


app.post('/products/add',upload.single('image'), async (req,res) => {
    await Product.create({
        name: req.body.name,
        price: req.body.price,
        image: '/image/' + req.file.filename,
        description: req.body.description
    })

    res.redirect('/products')
})

app.listen(6752)