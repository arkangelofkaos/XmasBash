/*
 -1: draw
 0: player 1 wins
 1: player 2 wins
*/

const initialGame = (player1, player2) => {
  if (player1 === player2) return -1;

  switch (player1) {
    case 'jack':
      return Number(player2 === 'grinch');
    case 'grinch':
      return Number(player2 === 'santa');
    case 'santa':
      return Number(player2 === 'jack');
  }

  return 0;
}

const bls = (result, player1, player2) => {
  if (player1 === player2) return result;
  return result === -1 ? -1 : (result + 1) % 2;
}

const elves = (result, playerNumber) => {
  return result === -1 ? playerNumber : result
}

module.exports = (player1, player2, modifier1, modifier2) => {
  let result = initialGame(player1, player2);

  if (modifier1 === 'barrel, lock & shock') {
    result = bls(result, player1, player2);
  } else if (modifier1 === 'elves in the shelves') {
    result = elves(result, 0)
  }

  if (modifier2 === 'barrel, lock & shock') {
    result = bls(result, player1, player2);
  } else if (modifier2 === 'elves in the shelves') {
    result = elves(result, 1)
  }


  // 'elves in the shelves', 'mama who'

  return result;
};
