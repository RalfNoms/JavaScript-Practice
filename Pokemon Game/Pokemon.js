// Pokémon data
const pokemonData = [
    { name: "Pikachu", type: "Electric" },
    { name: "Charmander", type: "Fire" },
    // Add more Pokémon data here
  ];
  
  // Select random Pokémon from the data
  function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    return pokemonData[randomIndex];
  }
  
  // Initialize the game
  function initializeGame() {
    const playerPokemon = getRandomPokemon();
    const enemyPokemon = getRandomPokemon();
  
    displayPokemon("playerPokemon", playerPokemon);
    displayPokemon("enemyPokemon", enemyPokemon);
  }
  
  // Display a Pokémon in the specified container
  function displayPokemon(containerId, pokemon) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
      <div class="pokemon">
        <span>${pokemon.name}</span>
        <span>Type: ${pokemon.type}</span>
      </div>
    `;
  }
  
  // Event listener for the battle button
  document.getElementById("battleButton").addEventListener("click", initializeGame);

  