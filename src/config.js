module.exports = {
  SERVER: {
    port: '3010',
    host: 'http://localhost:'
  },
  corsOptions: {
    origin: '*',
    optionsSuccessStatus: 200,
  },
  API: {
    method: 'https://',
    defaultRegion: 'la1',
    URL: {
      account: '.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
      matches: '.api.riotgames.com/lol/match/v4/matchlists/by-account/',
      leagues: '.api.riotgames.com/lol/league/v4/entries/by-summoner/',
      maestries: '.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/',
      champions: 'https://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/champion.json',
      profileIcons: 'http://ddragon.leagueoflegends.com/cdn/11.5.1/img/profileicon/',
      championSquare: 'http://ddragon.leagueoflegends.com/cdn/11.5.1/img/champion/',
      championsImage: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
    },
    key: '?api_key=RGAPI-539aaa0b-5cf4-4c17-8218-50aadd6a4ee5'
  }
}