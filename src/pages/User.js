const userCtrl = require('../components/users/controller')

const User = async (summoner) => {
  const { username, icon, region, league, maestries } = summoner
  let champMaestries = []

  for (let i = 0; i <= 9; i++) {

    const champMatch = await userCtrl.getChampMatches(summoner.accountId, maestries[i].championKey, summoner.regionCode)

    const champ = {
      id: maestries[i].championId,
      level: maestries[i].level,
      div: `
        <div class="relative flex mx-auto w-96 h-48 border bg-gray-100 shadow transition duration-200 hover:shadow-md rounded-lg">
          <div class="self-center w-36 h-36 -ml-3 bg-gray-200 border border-gray-300 shadow-md rounded-full">
            <div class="flex justify-center items-center w-full h-full rounded-full shadow">
              <img src="https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/${maestries[i].championId}.png" 
                alt="" 
                class="rounded-full p-1 border-2 border-m${maestries[i].level}">
            </div>
          </div>
          <div class="p-3">
            <div>
              <h3 class="font-semibold">${maestries[i].championName}</h3>
              <p class="text-gray-400 w-48 h-10">${maestries[i].title}</p>
            </div>
            <div class="flex mt-1">
              <div class="grid grid-cols-3 w-30 p-1 px-1.5 mr-2 border rounded-full shadow-md">
                ${
                  Array(maestries[i].tags.length).fill().map((item, j) => `
                    <img src="./assets/Roles/${maestries[i].tags[j]}.png" alt="${maestries[i].tags[j]}" class="w-6 rounded-full mx-auto">
                  `).join('')
                }
              </div>
              <div class="grid grid-cols-2 w-20 p-1 px-1.5 border rounded-full shadow-md">
                <img src="./assets/Position_Bronze-Top.png" alt="" class="w-6 mx-auto">
                <img src="./assets/Position_Bronze-Jungle.png" alt="" class="w-6 mx-auto">
              </div>
            </div>
            <div class="flex justify-around items-center w-52 h-16 mt-1.5">
              <div>
                ${champMatch.dataMatches.totalGames}
                <p class="text-xs">Games</p>
              </div>
              <div>
                victorias
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 flex items-center w-40">
            <div class="w-16 h-16">
              <img src="./assets/Maestries/M${maestries[i].level}.png" alt="" class="w-full h-full">
            </div>
            <div class="-ml-1 border-2 rounded-2xl">
              <h4 class="py-1 px-1.5 bg-gray-200 rounded-2xl border border-m${maestries[i].level} shadow-md text-gray-500 text-xs font-medium">
                MP: ${maestries[i].points}
              </h4>
            </div>
          </div>
          <div class="absolute right-0 bg-${maestries[i].difficulty.color}-500 w-16 h-8 rounded-bl-3xl rounded-tr-lg border-l border-b shadow">
            <h4 class="my-1.5 text-center text-xs text-gray-200 font-medium">
              ${maestries[i].difficulty.text}
            </h4>
          </div>
        </div>
      `
    }

    champMaestries.push(champ)
  }

  let champOrdered = champMaestries.sort((a, b) => {
    return b.level - a.level
  }).filter(champ => champ.level >= 5)

  const champCards = []

  for(let i = 0; i <= 2; i++) {
    champCards.push(champOrdered[i].div)
  }
  
  const view = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" 
              href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" 
              integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" 
              crossorigin="anonymous">
        <link rel="stylesheet" href="./tailwind.css">
        <title>${username} Profile</title>
      </head>
      <body class="flex flex-col h-screen p-6 bg-gray-200 text-gray-500">
        <main class="flex pb-10 justify-between">
          <section id="statistics" class="w-1/4 h-full border border-blue-400">
      
          </section>
          <section id="summoner" class="flex justify-center w-5/12 h-full pt-5 border border-blue-400">
            <div class="relative">
              <h3 class="mb-4 text-center text-lg font-semibold">${username} - <span class="text-gray-400 font-normal"> ${region} </span></h3>
              <div class="relative flex justify-center items-center bg-gray-100 border-2 border-gray-300 w-64 h-64 shadow-md transition duration-200 hover:shadow-lg rounded-full">
                <div class="absolute left-0 w-1/2 h-full bg-yellow-800 rounded-l-full border border-gray-100 transform origin-right -rotate-90"></div>
                <div class="absolute left-0 w-1/2 h-full bg-gray-100 rounded-l-full"></div>
                <div class="absolute left-0 w-1/2 h-full bg-gray-100 rounded-l-full transform origin-right rotate-45"></div>
                <div class="absolute right-2 w-32 h-60 bg-gray-100 rounded-r-full"></div>
                <div class="absolute w-52 h-52 rounded-full border-4 border-yellow-800 shadow-xl transition duration-300 hover:border-green-500">
                  <img src="./assets/profileicon/${icon}.png" alt="" class="w-full rounded-full border-2 border-transparent">
                </div>
              </div>
              <img src="./assets/Leagues/${league.tier.toLowerCase()}.png" alt="" class="absolute w-20 -bottom-4 -ml-10 inset-x-1/2">
              <img src="./assets/Leagues/${league.nextTier.toLowerCase()}.png" alt="" class="absolute w-12 right-2 top-16">
            </div>
          </section>
          <div id="lines" class="w-1/4 h-full border border-blue-400">
      
          </div>
        </main>
        <section>
          <h3 class="mb-8 text-center text-2xl">Your big three</h3>
          <div id="champions" class="grid grid-cols-3 gap-3 pb-8">
            ${champCards.join('') || 'No tienes maestria 5 o mayor con ningun champ...'}
          </div>
        </section>
      </body>
    </html>
  `

  return view
}

module.exports = User