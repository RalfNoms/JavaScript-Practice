function Pokemon(name, level) {
    //properties
    this.name = name;
    this.level = level;
    this.health = 3 * level;
    this.attack = level;
  
    //methods
    this.tackle = function (target) {
      console.log(this.name + ' tackled ' + target.name);
      console.log(
        target.name +
          "'s health is now reduced to " +
          (target.health - this.attack)
      );
  
      target.health = target.health - this.attack;
  
      if (target.health < 5) {
        target.faint();
      }
    };
  
    this.faint = function () {
      console.log(this.name + ' ' + 'fainted. 🙁');
  
    };
  }
  
  let pikachu = new Pokemon('Pikachu', 16);
  let charizard = new Pokemon('Charizard', 20);
  let squirtle = new Pokemon('Squirtle', 10);
  let bulbasaur = new Pokemon('Bulbasaur', 10);
  let vaporeon = new Pokemon('Vaporeon', 17);
  let flareon = new Pokemon('Flareon', 17);
  let sylveon = new Pokemon('Espeon', 17);
  let umbreon = new Pokemon('Umbreon', 17);
  let jolteon = new Pokemon('Jolteon', 17);
  let leafeon = new Pokemon('Leafeon', 17);
  let glaceon = new Pokemon('Glaceon', 17);
  let espeon = new Pokemon('Espeon', 17);

  let player1Choice = prompt('Enter the number of your chosen Pokemon (Player 1):');
  let player1Pokemon = arrayPokemons[player1Choice - 1];
  
  console.log('Player 1, choose your Pokemon:');
  for (let i = 0; i < arrayPokemons.length; i++) {
    console.log(
      i + 1 + '. ' +
      arrayPokemons[i].name +
      ' - Level: ' +
      arrayPokemons[i].level +
      ' Health: ' +
      arrayPokemons[i].health
    );
  }
  
  console.log('Player 2, choose your Pokemon:');
  for (let i = 0; i < arrayPokemons.length; i++) {
    console.log(
      i + 1 + '. ' +
      arrayPokemons[i].name +
      ' - Level: ' +
      arrayPokemons[i].level +
      ' Health: ' +
      arrayPokemons[i].health
    );
  }
  
  let player2Choice = prompt('Enter the number of your chosen Pokemon (Player 2):');
  let player2Pokemon = arrayPokemons[player2Choice - 1];
  
  console.log('Battle Start!');
  console.log(player1Pokemon.name + ' vs ' + player2Pokemon.name);
  
  // Simulate battle until one of the Pokemon faints
  while (player1Pokemon.health > 0 && player2Pokemon.health > 0) {
    player1Pokemon.tackle(player2Pokemon);
    if (player2Pokemon.health > 0) {
      player2Pokemon.tackle(player1Pokemon);
    }
  }
  
  // Declare the winner
  if (player1Pokemon.health <= 0 && player2Pokemon.health <= 0) {
    console.log('It\'s a tie! Both Pokemon fainted.');
  } else if (player1Pokemon.health <= 0) {
    console.log(player2Pokemon.name + ' wins!');
  } else {
    console.log(player1Pokemon.name + ' wins!');
  }





  