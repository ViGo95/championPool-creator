const fetch = require('node-fetch')

const URL = require('../../config').API.URL.champions

const champions = []

const get = async () => {
  const response = await fetch(URL)
  const championData = await response.json()

  for(const champion in championData.data) {
    champions.push(championData.data[champion])
  }
  
  response.ok 
    ? console.log('Champions ready!') 
    : console.log('Cannot found champions...')
}

module.exports = {
  get,
  champions
}