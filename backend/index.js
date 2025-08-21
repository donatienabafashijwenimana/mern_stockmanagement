const express = require('express')
const app = express()
const cors = require('cors')
const mongose = require('mongoose')

const tablerouter = require('./router/alltable.routers')

require('dotenv').config()

mongose.connect(process.env.db_url,{})
.then(()=>{
    console.log('mongo db connected')
})
.catch((error)=>{
    console.log(error.message)
});

app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

app.use('/',tablerouter)

app.listen(process.env.PORT, () =>{
    console.log('server is run on 5000 port')
})