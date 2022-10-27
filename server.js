const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send({beholder: "deploy funcionou ;)"})
})

app.listen(PORT, () => {
    console.log(`servidor rodando na port:${PORT}`)
})