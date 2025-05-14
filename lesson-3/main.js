// File: main.js
const BASE_URL = "https://rickandmortyapi.com/api/character";

// DOM manipulation
const characterList = document.querySelector("#character-list");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// variables to control pagination
let currentPage = 1; // Current page number
let totalPages = 1; // Total number of pages

// Function to fetch characters from the API
async function getCharacters(page = 1) {
  try {
    const response = await fetch(`${BASE_URL}?page=${page}`);
    if (response.status !== 200) {
      throw new Error(`Check your code bro ${response.status}`);
    }

    const data = await response.json();
    totalPages = data.info.pages; // Update the total number of pages
    renderCharacters(data.results); // Pass the characters to renderCharacters

    updateBtns(); // Update the buttons based on the current page
  } catch (error) {
    characterList.innerHTML = `<p>There was a problem on fetching characters: ${error.message}</p>`;
  }
}

function renderCharacters(characters) {
  characterList.innerHTML = ""; // Clear the character list
  characters.forEach((el) => {
    const card = document.createElement("div");
    card.className = "card"; // Add a class to the card
    card.innerHTML = `
            <img class="card-image" src="${el.image}" alt="${el.name}">
            <h2 class="card-title">${el.name}</h2>
            <p style="font-size: 1.2rem">Status: ${el.status}</p>
            <p style="font-size: 1.2rem">Species: ${el.species}</p>
            <p style="font-size: 1.2rem">Species: ${el.status}</p>
            <p style="font-size: 1.2rem">Origin: ${el.origin.name}</p>
            <p style="font-size: 1.2rem">Location: ${el.location.name}</p>
            <p style="font-size: 1.2rem">Episodes: ${el.episode.length}</p>`;

    characterList.appendChild(card); // Append the card to the character list
  });
}

function updateBtns() {
  prevBtn.disable = currentPage === 1; // Disable the previous button on the first page
  nextBtn.disable = currentPage === totalPages; // Disable the next button on the last page
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    getCharacters(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    getCharacters(currentPage);
  }
}
);

getCharacters();
