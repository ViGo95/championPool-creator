const champions = require('../champions/controller').champions

const createSummoner = (account, region, league, maestries, match) => {
  const maestriesData = []

  maestries.forEach(m => {
    const maestry = {
      level: m.championLevel,
      points: m.championPoints
    }

    champions.forEach(c => {
      
      if(m.championId == c.key) {
        
        maestry.championName = c.name
        maestry.championId = c.key
      }
    })

    maestriesData.push(maestry)
  });
  
  const summoner = {
    username: account.name,
    region: region,
    level: account.summonerLevel,
    tier: league[0].tier + ' ' + league[0].rank,
    leaguePoints: league[0].leaguePoints,
    wins: league[0].wins,
    losses: league[0].losses,
    maestries: maestriesData,
    matches: match.matches
  }

  return summoner
}

module.exports = createSummoner