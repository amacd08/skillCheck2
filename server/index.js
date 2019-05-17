require('dotenv').config()
const express=require('express')
const massive=require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
app.use(express.json())

console.log(SERVER_PORT)

massive(CONNECTION_STRING).then(dbInstance => {
    app.set =('db', dbInstance)
    console.log('connection to db established')
}).catch(err => console.log(err))


app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))


