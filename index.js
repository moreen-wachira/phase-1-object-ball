const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
      },
    },
  };
  
  // Function to get the number of points scored by a player
  function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    return player.points;
  }
  
  // Function to get the shoe size of a player
  function shoeSize(playerName) {
    const player = findPlayer(playerName);
    return player.shoe;
  }
  
  // Function to get the colors of a team
  function teamColors(teamName) {
    const team = game.home.teamName === teamName ? game.home : game.away;
    return team.colors;
  }
  
  // Function to get an array of team names
  function teamNames() {
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to get the jersey numbers of players in a team
  function playerNumbers(teamName) {
    const team = game.home.teamName === teamName ? game.home : game.away;
    const playerNumbers = Object.values(team.players).map((player) => player.number);
    return playerNumbers;
  }
  
  // Function to get the stats of a player
  function playerStats(playerName) {
    return findPlayer(playerName);
  }
  
  // Function to find the player with the largest shoe size
  function bigShoeRebounds() {
    const players = Object.values(game.home.players).concat(
      Object.values(game.away.players)
    );
    const playerWithLargestShoe = players.reduce((largest, player) =>
      largest.shoe > player.shoe ? largest : player
    );
    return playerWithLargestShoe.rebounds;
  }
  
  // Function to find a player by name
  function findPlayer(playerName) {
    const allPlayers = Object.values(game.home.players).concat(
      Object.values(game.away.players)
    );
    return allPlayers.find((player) => playerName === player.name);
  }
  
  // Example usage:
  console.log(numPointsScored("Reggie Evans")); 
  console.log(shoeSize("Reggie Evans")); 
  console.log(teamColors("Brooklyn Nets")); 
  console.log(teamNames()); 
  console.log(playerNumbers("Charlotte Hornets")); 
  console.log(playerStats("DeSagna Diop")); 
  console.log(bigShoeRebounds()); 