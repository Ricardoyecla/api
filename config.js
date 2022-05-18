module.exports={
    port: process.env.PORT || 3000,
    //const MONGODB_URI='mongodb+srv://ricardoyecla:8xm3rryhysf4MKwc@cluster0.h6pyu.mongodb.net/shop?retryWrites=true&w=majority'
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    SECRET_TOKEN: 'miclavedetokens'
}