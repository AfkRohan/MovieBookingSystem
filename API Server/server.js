const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')

const app = express()

app.listen(4000,()=>{
    console.log("Server is listening at port 4000 !!!!!!!!!!")
})

app.use(cors({
    origin:"*"
}))

app.use(cookieParser())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

const routes = require('./routes/web-config');

app.use('/api', routes)

