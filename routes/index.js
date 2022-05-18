'use strict'

const express=require('express')
const productCtrl=require('../controllers/product');
const userCtrl=require('../controllers/user')
const api= express.Router();
const auth=require('../middleware/auth')



api.get('/product', auth,productCtrl.getProducts)
api.get('/product/:productId',productCtrl.getProduct)
api.post('/product',productCtrl.saveProduct)
api.put('/product/:productId',productCtrl.updateProduct)
api.delete('/product/:productId',productCtrl.deleteProdroduct)
api.post('/signup',userCtrl.signUp);
api.post('/signin',userCtrl.signIn);
api.get('/private',auth, function(req,res){
    res.status(200).send({message:'Tines acceso a lzona privada'})
}) 

module.exports=api