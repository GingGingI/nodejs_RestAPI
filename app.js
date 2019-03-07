const express = require('express')
const app = express()

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`app is running at ${port}`)
})

app.get('/', (req, res) => {
    let from = req.query.from
    let to = req.query.to

    // 0, 30 = 0
    // 1, 30 = 30
    // 2, 30 = 60
    // 3, 30 = 90

    var jsonData = []
    for (i = ((from - 1) * to); i < from * to; i++) {
        jsonData.push({data:`Number ${i}`})
    }

    res.json(jsonData)
})
app.get('/data', (req, res) => {
    res.send(`Post Number ${req.query.id}`)
})