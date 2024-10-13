// function getRandom() {
//     var n = Math.random();
//     // console.log(Math.round(n * 6)); //To get numbers bewteen 0 and 6
//     console.log(Math.floor(n*6) + 1); //To get numbers bewteen 1 and 6
// }

// getRandom();

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQB6nzyUeFiCNsxqkIfzwNPQkufbBCktXK5RsHxhde6sulbflZhioiFTUMcm-VAkz4A05qP6XEyK0TwGqgD9YZWuooNhciiIRytTz8ueP3Di-iEF8_wYa8WTY7olacuqVUxWkS1zLacDFGv2oKtLfj9b7FS5txDxsfS8_u4rH3eYPguS8_zR2ioJz-uEBg3OzUl0JXlyOmWfgpwVeK3crFqiVSu5ZbBH8296rC_U8qwlijovuhTHcltBUQH02JB0YyVp8R51Oq4aEMXvnGqxUpV8XWo7';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);





const axios = require('axios'); // Assuming Axios is installed (e.g., `npm install axios`)

async function getPokemonData(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    // Process the fetched Pokémon data (e.g., display it on the page)
    console.log(data);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}

// Example usage:
const pokemonName = "bulbasaur";
getPokemonData(pokemonName);