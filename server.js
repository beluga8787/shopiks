import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index', {
        tomy:  "ahh le le le ahh le las",
        cssname: "product"
    })
})


app.get('/products', (req, res) => {
    res.render('products', {
        tomy: 'Producti',
        cssname: 'products'
    })
})

app.get('/cart', (req, res) => {
    res.render('cart', {
        tomy: 'Cart',
        cssname: 'cart'
    })
})
app.listen(6752)