import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const app=express()
mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection

db.on('error', function (error){ console.error(error)})
db.once('open', function (open){ console.log("Connected to database")})

app.use(express.json())
app.listen(3000, function(){
    console.log("Server Connected")
})