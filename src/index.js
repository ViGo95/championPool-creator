const express = require('express')
const app = express()
const server = require('http').Server(app)

const cors = require('cors')
const bodyParser = require('body-parser')

const champions = require('./components/champions/controller')
const SERVER = require('./config').SERVER
const router = require('./routes')
const corsOptions = require('./config').corsOptions

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use('/', express.static('public'))

router(app)

server.listen(SERVER.port, () => {
  champions.get()
  console.log(`Server on port: ${SERVER.host}${SERVER.port}`)
})