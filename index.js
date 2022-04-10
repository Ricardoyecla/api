'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//importamos mongoose
const mongoose = require('mongoose');

//Improtar modelos

const Product = require('./models/product')

const app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

/* app.get('/hola/:name',(req,res)=>{
    res.send({message:`Hola ${req.params.name}`})
}) */

app.get('/api/product',(req,res)=>{
    //console.log(req.body)
    res.status(200).send({"id":122,"nombre":"otro"})
})

app.get('/api/product/:productId',(req,res)=>{
    let productId=req.params.productId

    Product.findById(productId,(err,product)=>{
        if (err) return res.status(500).send({message:`Error al realizar petición ${err}`})
        if (!product) return res.status(404).send({message:`El producto no existe`})

        res.status(200).send({product})
        console.log(product)
    })
})
app.post('/api/product',(req,res)=>{
    console.log('POST /api/product')
    console.log(req.body)
    
    let product= new Product();
    product.name= req.body.name;
    product.picture=req.body.picture;
    product.price=req.body.price;
    product.category=req.body.category;
    product.description=req.body.description;

    product.save((err,productoStrored)=>{
        if (err) res.status(500).send({message:`Error al salvar en la base de datos: ${err}`})

        res.status(200).send({product: productoStrored})
    })
})
app.put('/api/product/:productId',(req,res)=>{
    
})
app.delete('/api/product/:productId',(req,res)=>{
    
})

//const MONGODB_URI='mongodb+srv://ricardoyecla:8xm3rryhysf4MKwc@cluster0.h6pyu.mongodb.net/shop?retryWrites=true&w=majority'
const MONGODB_URI='mongodb://localhost:27017/shop'

const port = process.env.PORT || 3000

mongoose.connect(MONGODB_URI,(err,res)=>{
        if (err) {
            return console.log(`Error al conecta a la mongod Atlas: ${err}`)
        }
        console.log('Connected to MongoDB Atlas')
        app.listen(port,()=>{
    console.log(`Mi acpi rest corrientdo en ${port}`)
})
})

// Hasta aquí funciona hoy






