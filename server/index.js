require('dotenv').config()
const express=require('express')
const massive=require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
const controller = require('./controller/controller')
app.use(express.json())


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('connection to db established')

}).catch(err => console.log(err))


app.get('/api/inventory',controller.getAll)
app.post('/api/product', controller.addProduct)
app.delete('/api/product/:id', controller.deleteProduct)
app.put('/api/product', controller.updateProduct)


app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))


