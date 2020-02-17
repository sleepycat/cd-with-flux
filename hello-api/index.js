const express = require('express')
const app = express()
const { MESSAGE = 'hello world' } = process.env
const port = 3000

app.get('/', (req, res) => res.json({ message: MESSAGE }))

app.listen(port, () => {
  console.log(`listening on port ${port}!`)
})
