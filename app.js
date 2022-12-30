import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const app = express()
app.use('/', (req,res) => {
    res.send('hello world')
    console.log("hello from localhost 8080")
})
app.listen(8080)
