'use strict'


//npm install -S moment 
const jwt = require('jwt-simple')
const moment = require('moment')
const config=require('../config')

function createToken(user){
    const payload={
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14,'days').unix()
    }

    return jwt.encode(payload, config.SECRET_TOKEN )
}

function decodeToken(token){
    const decoded=new Promise((resolve,reject)=>{
        try {
            const payload=jwt.decode(token,config.SECRET_TOKEN)
            console.log(`El token a decodificar es ${token}`)

            if (payload.exp<=moment().unix()){
                reject({
                    status:401,
                    message:'El token ha expirado'
                })
            }
            console.log(`El usuario es ${payload.sub}`)
            resolve(payload.sub)
        }catch(err){
            console.log('no valido el token')
            reject({
                status:500,
                message: 'Token no valido'
            })
        }
    })
    return decoded
}

module.exports={
    createToken,
    decodeToken
}