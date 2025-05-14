const BASE_URL = "https://rickandmortyapi.com/api/character";

async function getCharacters() {
  try {
    const response = await fetch(BASE_URL);
    // if(!response.ok) {throw new Error(`Check your code bro ${response.status}`);
    if (response.status !== 200) {
      throw new Error(`Check your code bro ${response.status}`);
    }

    const data = await response.json();
    const characters = data.results.map((param) => param.name);
    console.log(characters);
  } catch (error) {
    console.error("There was a problem on fetching characters", error);
  }
}

getCharacters();
// The function getCharacters fetches data from the Rick and Morty API,
