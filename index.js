const inquirer = require('inquirer');
//const 

inquirer.prompt([
  {
    type: 'list',
    name: 'player1',
    message: 'Player 1\'s card',
    choices: [
      'Santa',
      'Grinch',
      'Jack'
    ]
  },
  {
    type: 'list',
    name: 'player2',
    message: 'Player 2\'s card',
    choices: [
      'Santa',
      'Grinch',
      'Jack'
    ]
  }
]).then(answers => {
  console.log(`Player choices = "${answers.player1}" vs "${answers.player2}"`);
  //TODO call game with answers
}, console.error);