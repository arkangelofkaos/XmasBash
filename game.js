/*
 -1: draw
 0: player 1 wins
 1: player 2 wins
*/

module.exports = (player1, player2) => {
  if (player1 === player2) return -1;
  if (player1 === "jack") {
    if (player2 === "grinch") {
      return 1;
    }
  }
  if (player1 === "grinch") {
    if (player2 === "santa") {
      return 1;
    }
  }
  
  if (player1 === "santa") {
    if (player2 === "jack") {
      return 1;
    }
  }

  return 0;
};
