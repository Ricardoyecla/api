'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//importamos mongoose
const mongoose = require('mongoose');

const app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

/* app.get('/hola/:name',(req,res)=>{
    res.send({message:`Hola ${req.params.name}`})
}) */
app.get('/api/product',(req,res)=>{
    console.log(req.body)
    res.status(200).send({"id":122,"nombre":"otro"})
})
app.get('/api/product/:productId',(req,res)=>{
    
})
app.post('/api/product',(req,res)=>{
    console.log(req.body)
    res.status(200).send({message:`Producto recibido`})
})
app.put('/api/product/:productId',(req,res)=>{
    
})
app.delete('/api/product/:productId',(req,res)=>{
    
})

mongoose.connection('MONGODB_URI=mongodb+srv://ricardoyecla:8xm3rryhysf4MKwc@cluster0.h6pyu.mongodb.net/shop?retryWrites=true&w=majority',(err,res)=>{
    if(err) throw err
    console.log('conexión a mongodb realizada.')
    
    app.listen(port,()=>{
    console.log(`Mi acpi rest corrientdo en ${port}`)
})
})
const port = process.env.PORT || 3000



