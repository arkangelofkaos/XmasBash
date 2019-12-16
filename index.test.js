const game = require('./game');

const expectedOutcomes  = [
  ['jack', 'grinch', 1],
  ['jack', 'jack',  -1],
  ['jack', 'santa', 0],
  ['grinch', 'grinch', -1],
  ['grinch', 'jack', 0],
  ['grinch', 'santa', 1],
  ['santa', 'grinch', 0],
  ['santa', 'santa', -1],
  ['santa', 'jack', 1],
]

expectedOutcomes.forEach(testData => {
  const [player1, player2, outcome] = testData
  test(`the outcome for ${player1} vs ${player2} is ${outcome}`, () => {
    expect(game(player1, player2)).toEqual(outcome);
  })
})