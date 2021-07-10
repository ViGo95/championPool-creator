const champions = require('../champions/controller').champions

const createSummoner = (account, regionCode, league, maestries, match) => {
  const maestriesData = []
  let nextTier = ''

  maestries.forEach(m => {
    const maestry = {
      level: m.championLevel,
      points: m.championPoints,
      difficulty: {

      }
    }

    champions.forEach(c => {
      
      if(m.championId == c.key) {
        
        maestry.championName = c.name
        maestry.championId = c.id
        maestry.championKey = c.key
        maestry.title = c.title
        maestry.tags = c.tags

        if(c.info.difficulty < 3) {
          maestry.difficulty.color = 'green'
          maestry.difficulty.text = 'Easy'
        } else if(c.info.difficulty < 7) {
          maestry.difficulty.color = 'blue'
          maestry.difficulty.text = 'Medium'
        } else if(c.info.difficulty < 9) {
          maestry.difficulty.color = 'yellow'
          maestry.difficulty.text = 'Hard'
        } else {
          maestry.difficulty.color = 'red'
          maestry.difficulty.text = 'Heavy'
        }
      }
    })

    maestriesData.push(maestry)
  });

  // TERMINAR EL SWITCH!!!

  switch (regionCode) {
    case 'la1':
      region = 'LAN'
      break;

      case 'euw1':
      region = 'EUW'
      break;
  
    default:
      region = 'none'
      break;
  }

  if (league[0]) {

    switch (league[0].tier) {
      case 'IRON':
        nextTier = 'BRONZE'
      break;

      case 'BRONZE':
        nextTier = 'SILVER'
      break;
  
      case 'SILVER':
        nextTier = 'GOLD'
      break;

      case 'GOLD':
        nextTier = 'PLATINUM'
      break;
  
      case 'PLATINUM':
        nextTier = 'DIAMOND'
      break;

      case 'DIAMOND':
        nextTier = 'MASTER'
      break;
  
      case 'MASTER':
        nextTier = 'GRANDMASTER'
      break;
  
    default:
      nextTier = 'IRON'
      break;
    }
  } else {
    league[0] = 'UNRANKED'
  }

  const summoner = {
    id: account.id,
    accountId: account.accountId,
    username: account.name,
    icon: account.profileIconId,
    regionCode: regionCode,
    region: region,
    level: account.summonerLevel,
    league: {
      tier: league[0].tier || 'Unranked',
      nextTier,
      rank: league[0].rank || 'Unranked',
      points: league[0].leaguePoints || 'Unranked',
    },
    wins: league[0].wins,
    losses: league[0].losses,
    maestries: maestriesData,
    // matches: match.matches
  }

  console.log(summoner.id)
  return summoner
}

module.exports = createSummoner