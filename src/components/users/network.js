const express = require('express')
const router = express.Router()

const champions = require('../champions/controller').champions
const success = require('../../utils/response').success
const error = require('../../utils/response').error
const getSummoner = require('./controller')
const User = require('../../pages/User')

router.get('/user', async (req, res) => {
  const { username, region } = req.query
  
  const summoner = await getSummoner(username, region)

  const response = User(summoner)

  success(req, res, '200', response, 'Ok')
})

module.exports = router