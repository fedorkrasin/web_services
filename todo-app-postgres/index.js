const express = require('express')
const drinkRouter = require('./routes/drinks.routes')
const cors = require('cors')

const PORT = process.env.PORT || 8080


const app = express()

const corsOptions = {
  origin: "*"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/api', drinkRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


