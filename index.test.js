const game = require('./game');

const expectedOutcomes = [
  ['jack', 'grinch', 1],
  ['jack', 'jack', -1],
  ['jack', 'santa', 0],
  ['grinch', 'grinch', -1],
  ['grinch', 'jack', 0],
  ['grinch', 'santa', 1],
  ['santa', 'grinch', 0],
  ['santa', 'santa', -1],
  ['santa', 'jack', 1]
];

describe('Basic', () => {
  expectedOutcomes.forEach(testData => {
    const [player1, player2, outcome] = testData;
    test(`the outcome for ${player1} vs ${player2} is ${outcome}`, () => {
      expect(game(player1, player2)).toEqual(outcome);
    });
  });
})

const expectedOutcomesWithBLS = [
  ['jack', 'grinch', 'barrel, lock & shock', 'barrel, lock & shock', 1],
  ['jack', 'jack', 'barrel, lock & shock', 'barrel, lock & shock', -1],
  ['jack', 'santa', 'barrel, lock & shock', 'barrel, lock & shock', 0],
  ['grinch', 'grinch', 'barrel, lock & shock', 'barrel, lock & shock', -1],
  ['grinch', 'jack', 'barrel, lock & shock', 'barrel, lock & shock', 0],
  ['grinch', 'santa', 'barrel, lock & shock', 'barrel, lock & shock', 1],
  ['santa', 'grinch', 'barrel, lock & shock', 'barrel, lock & shock', 0],
  ['santa', 'santa', 'barrel, lock & shock', 'barrel, lock & shock', -1],
  ['santa', 'jack', 'barrel, lock & shock', 'barrel, lock & shock', 1],
  
  ['jack', 'grinch', 'barrel, lock & shock', 'elves in the shelves', 0],
  ['jack', 'jack', 'barrel, lock & shock', 'elves in the shelves', 1],
  ['jack', 'santa', 'barrel, lock & shock', 'elves in the shelves', 1],
  ['grinch', 'grinch', 'barrel, lock & shock', 'elves in the shelves', 1],
  ['grinch', 'jack', 'barrel, lock & shock', 'elves in the shelves', 1],
  ['grinch', 'santa', 'barrel, lock & shock', 'elves in the shelves', 0],
  ['santa', 'grinch', 'barrel, lock & shock', 'elves in the shelves', 1],
  ['santa', 'santa', 'barrel, lock & shock', 'elves in the shelves', 1],
  ['santa', 'jack', 'barrel, lock & shock', 'elves in the shelves', 0],


  ['jack', 'grinch', 'elves in the shelves', 'barrel, lock & shock', 0],
  ['jack', 'jack', 'elves in the shelves', 'barrel, lock & shock', 0],
  ['jack', 'santa', 'elves in the shelves', 'barrel, lock & shock', 1],
  ['grinch', 'grinch', 'elves in the shelves', 'barrel, lock & shock', 0],
  ['grinch', 'jack', 'elves in the shelves', 'barrel, lock & shock', 1],
  ['grinch', 'santa', 'elves in the shelves', 'barrel, lock & shock', 0],
  ['santa', 'grinch', 'elves in the shelves', 'barrel, lock & shock', 1],
  ['santa', 'santa', 'elves in the shelves', 'barrel, lock & shock', 0],
  ['santa', 'jack', 'elves in the shelves', 'barrel, lock & shock', 0]
];

describe('1st modification set', () => {
  expectedOutcomesWithBLS.forEach(testData => {
    const [player1, player2, modifier1, modifier2, outcome] = testData;
    test(`the outcome for ${player1} (modifier: ${modifier1}) vs ${player2} (modifier: ${modifier2}) is ${outcome}`, () => {
      expect(game(player1, player2, modifier1, modifier2)).toEqual(outcome);
    });
  });
})
