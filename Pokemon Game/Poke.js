let playerPokemon = {
    name: "Pikachu",
    health: 100,
    attack: 20,
    defense: 10
    
}
let enemyPokemon = {
    name: "Charizard",
    health: 100,
    attack: 25,
    defense: 15
}
let output = document.getElementById("output");
let input = document.getElementById("input");

// Function to display text in the output section
function display(text) {
    output.innerHTML += "<p>" + text + "</p>";
}

// Function to process player's commands
function processCommand() {
    let command = input.value.toLowerCase();
    input.value = "";

    // Implement game logic based on the command
    if (command === "attack") {
        attack();
    } else if (command === "defend") {
        defend();
    } else if (command === "run") {
        run();
    } else {
        display("Invalid command. Please try again.");
    }
}

// Function to simulate an attack by the player
function attack() {
    let damage = calculateDamage(playerPokemon.attack, enemyPokemon.defense);
    enemyPokemon.health -= damage;

    display("You attacked " + enemyPokemon.name + " and dealt " + damage + " damage.");

    if (enemyPokemon.health <= 0) {
        display("Congratulations! You defeated " + enemyPokemon.name + ".");
    } else {
        enemyAttack();
    }
}

// Function to simulate an attack by the enemy
function enemyAttack() {
    let damage = calculateDamage(enemyPokemon.attack, playerPokemon.defense);
    playerPokemon.health -= damage;

    display(enemyPokemon.name + " attacked you and dealt " + damage + " damage.");

    if (playerPokemon.health <= 0) {
        display("Game Over! You were defeated by " + enemyPokemon.name + ".");
    }
}

// Function to calculate the damage inflicted during an attack
function calculateDamage(attack, defense) {
    return Math.max(1, attack - defense);
}

// Function to defend against the enemy's attack
function defend() {
    let damage = calculateDamage(enemyPokemon.attack / 2, playerPokemon.defense);
    playerPokemon.health -= damage;

    display("You defended against " + enemyPokemon.name + "'s attack and received " + damage + " damage.");

    if (playerPokemon.health <= 0) {
        display("Game Over! You were defeated by " + enemyPokemon.name + ".");
    } else {
        enemyAttack();
    }
}

// Function to attempt escaping from the battle
function run() {
    display("You ran away from the battle. Game Over!");
}