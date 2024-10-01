import express from "express";
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send(`Welcom to Home Route`)
})
app.get('/auth', (req, res) => {
    res.send(`Welcom to auth Route`)
})
app.get('/about', (req, res) => {
    res.send(`Welcom to about Route`)
})
app.get('/sufiyan', (req, res) => {
    res.send(`Welcom to Sufiyan Route`)
})
app.get('/tahir', (req, res) => {
    res.send(`Welcom to tahir Route`)
})
app.get('/:slug/:id', (req, res) => {
    const param = req.params.slug
    const param2 = req.params.id
    res.send(`Welcom to ${param} Route if  id ${param2}`)
})

app.listen(process.env.PORT, () => {
    console.log(`app is listing to http://localhost:${process.env.PORT}`)
})