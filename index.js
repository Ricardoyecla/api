'use strict'

const mongoose = require('mongoose');
const app=require('./app')
const config = require('./config')


/* app.get('/hola/:name',(req,res)=>{
    res.send({message:`Hola ${req.params.name}`})
}) */

mongoose.connect(config.db,(err,res)=>{
        if (err) {
            return console.log(`Error al conecta a la mongod Atlas: ${err}`)
        }
        console.log('Connected to MongoDB Atlas')
        app.listen(config.port,()=>{
    console.log(`Mi acpi rest corrientdo en ${config.port}`)
})
})







