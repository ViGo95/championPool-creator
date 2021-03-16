const champions = require('../src/components/champions/controller').champions

// const Searching = () => {
//   const view = `
//     <section id="search" class="flex flex-col">
//       <img src="./assets/621feb70817945.5bb040bf2b796-removebg-preview.png" 
//         alt=""
//         class="w-28 self-center mb-4">
//       <form action="/user" method="GET" class="flex justify-center items-center">
//         <input id="summoner_search"
//         type="search" 
//         name="username" 
//         placeholder="Summoner name..."
//         class="w-96 h-10 border-2 border-gray-300 pl-3 text-gray-400 text-sm rounded-xl transition duration-200 hover:border-purple-300 focus:border-purple-500 focus:outline-none"> 
//         <select id="region_input" 
//           name="region"
//           class="w-14 h-8 -ml-16 text-gray-400 text-sm rounded-r-xl focus:text-purple-400 focus:outline-none">
//           <option value="la1">LAN</option>
//           <option value="la2">LAS</option>
//           <option value="euw1">EUW</option>
//           <option value="eun1">EUN</option>
//           <option value="kr">KR</option>
//           <option value="jp1">JP</option>
//           <option value="na1">NA</option>
//           <option value="oc1">OC</option>
//           <option value="br1">BR</option>
//           <option value="ru">RS</option>
//           <option value="tr1">TR</option>
//         </select>
//         <button type="submit" 
//           class="bg-purple-500 pl-1 ml-2 w-12 h-10 rounded-r-xl text-gray-100 transition duration-200 hover:bg-purple-400 focus:outline-none active:bg-green-500">
//           Go
//         </button>
//         <div class="w-2 h-10 bg-white rounded-r-xl -ml-12"></div>
//       </form>
//     </section>
    
//   `

//   return view
// }

// const main = document.querySelector('#main')

// main.innerHTML = Searching()