'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// npm i -S bcrypt-nodejs
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
    email: { type:String, unique:true,lowercase:true},
    displayName:String,
    password: String,
    signUpDate: {type: Date, default: Date.now()},
    lastlogin: Date
})

UserSchema.pre('save',function(next){
    let user =this
    if(!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err,salt)=>{
        if (err) return next(err)

        bcrypt.hash(user.password,salt,null,(err,hash)=>{
            if(err) return next(err)

            user.password=hash
            next()
        })
    })
})

module.exports=mongoose.model('User',UserSchema)