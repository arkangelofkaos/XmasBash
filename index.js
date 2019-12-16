const inquirer = require('inquirer');
const game = require('./game');

const CHOICES = ['santa', 'grinch', 'jack'];
const MODIFIERS = ['barrel, lock & shock', 'elves in the shelves', 'mama who'];

const reveal = choice => {
  const others = CHOICES.filter(el => el !== choice);
  return others[Number(Math.random() > 0.5)];
};

inquirer
  .prompt([
    {
      type: 'list',
      name: 'player1',
      message: "Player 1's card",
      choices: CHOICES
    },
    {
      type: 'list',
      name: 'player2',
      message: "Player 2's card",
      choices: CHOICES
    }
  ])
  .then(answers => {
    // console.log(`Player choices = "${answers.player1}" vs "${answers.player2}"`);
    console.log(`Reveal (P1 vs P2): ${reveal(answers.player1)} vs ${reveal(answers.player2)}`);
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'modifier1',
          message: 'Player1 modifier',
          choices: MODIFIERS
        },
        {
          type: 'list',
          name: 'modifier2',
          message: 'Player2 modifier',
          choices: MODIFIERS
        }
      ])
      .then(ans => {
        const p = ['Player 1', 'Player 2'];
        const g = game(answers.player1, answers.player2, ans.modifier1, ans.modifier2);
        console.log(`${p[g]} wins`);
      }, console.error);
  }, console.error);
