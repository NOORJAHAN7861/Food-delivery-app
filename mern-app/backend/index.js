const express = require('express')
const app = express()
const PORT = 5000
const mongodb = require("./db")
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})