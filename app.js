const express = require("express")
const { get } = require("http")

const app = express()

const path = require("path")

app.use(express.static('./public'))

app.listen(8000, () => {
    console.log('servidor corriendo')
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})