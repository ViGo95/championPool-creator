const fetch = require('node-fetch')

const API = require('../../config').API
const model = require('./model')

const getSummoner = async (username, region) => {
  const response = await fetch(API.method + region + API.URL.account + username + API.key)
  const data = await response.json()
  
  const league = await getLeague(data.id, region)
  const maestries = await getMaestries(data.id, region)
  const matches = await getMatches(data.accountId, region)

  const summoner = model(data, region, league, maestries, matches)
  return summoner
}

const getLeague = async (accountId, region) => {
  const response = await fetch(API.method + region + API.URL.leagues + accountId + API.key)
  const matches = await response.json()

  return matches
}

const getMaestries = async (accountId, region) => {
  const response = await fetch(API.method + region + API.URL.maestries + accountId + API.key)
  const matches = await response.json()

  return matches
}

const getMatches = async (accountId, region) => {
  const response = await fetch(API.method + region + API.URL.matches + accountId + API.key)
  const matches = await response.json()

  return matches
}

module.exports = getSummoner