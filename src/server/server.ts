import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: express.Application = express()
const port: string = process.env.PORT || '8080'

app.get('/', (req, res) => {
  res.send("altce")
})

app.listen(port, () => {
  console.log('Server Up')
})