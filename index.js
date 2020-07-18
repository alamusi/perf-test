'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const json = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send('{"valid" : 10000}')
}

const text = (req, res) => res.send('OK')

app.use('/v2/trace', json)
app.use('/v2/token', json)
app.use('/v2/event', text)
app.use('/v2/datapoint', text)

app.listen(port, () => console.log(`listening at http://localhost:${port}`))
