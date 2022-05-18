'use strict'

const express = require('express')
const bodyParser = require('body-parser')
//npm install -S express-handlebars
const hbs=require('express-handlebars')
const path=require('path')
const cors = require('cors')
const app=express()
const api=require('./routes')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
//
//configuration development views
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', hbs.engine({
	defaultLayout: 'default',
	extname: '.hbs'
}));

//,	
//   layoutsDir: path.join(__dirname, 'views/layouts')

//Routes development 
app.set('view engine', '.hbs');

app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/productos', (req, res) => {
	res.render('productos');
});
app.use('/api',api)


module.exports=app