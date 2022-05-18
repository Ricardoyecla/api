'use strict'

const { response } = require('../app')
const services=require('../services')


function isAuth(req,res,next){
    if (!req.headers.authorization){
        return res.status(403).send({message: 'No tines autorización'})
    }

    const token = req.headers.authorization.split(" ")[1]
    console.log(token)

    services.decodeToken(token)
        .then(response=>{
            console.log('222')
            req.user=response
            console.log(req.user)
            next()
        })
        .catch(response=>{
            res.status(response.status).send({message:response.message})
        })
}

module.exports=isAuth