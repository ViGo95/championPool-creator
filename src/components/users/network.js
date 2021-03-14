const express = require('express')
const router = express.Router()

const champions = require('../champions/controller').champions
const success = require('../../utils/response').success
const error = require('../../utils/response').error
const getSummoner = require('./controller')

router.get('/user', async (req, res) => {
  const { username, region } = req.query
  console.log(req.query)
  const summoner = await getSummoner(username, region)

  success(req, res, '200', summoner, 'Ok')
})

module.exports = router