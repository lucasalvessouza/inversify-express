import "reflect-metadata"
import express from "express";

import { router as entityRouter } from './services/entity/controller'

const PORT = 3000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello')
})

app.use('/entities', entityRouter)


app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})