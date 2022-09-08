const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send({beholder: "deploy funcionou ;)"})
})

app.listen(PORT, () => {
    console.log(`servidor rodando na port:${PORT}`)
})