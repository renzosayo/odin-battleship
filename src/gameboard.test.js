const createGameboard = require('./gameboard');

const gameboard = createGameboard();

afterEach(() => {
  gameboard.clear();
});

test('Places ship in proper coordinates', () => {
  gameboard.placeAt([3, 3]);
  expect(gameboard.placeAt([3, 3])).toBe(false);
});

test('receiveAttack() determines hit(true)/miss(false)', () => {
  gameboard.placeAt([3, 3]);
  expect(gameboard.receiveAttack([3, 3])).toBe(true);
  expect(gameboard.receiveAttack([0, 0])).toBe(false);
});

test('Properly registers missed attacks', () => {
  expect(gameboard.getMisses().length).toBe(0);
  gameboard.receiveAttack([3, 2]);q
  expect(gameboard.getMisses().length).not.toBe(0);
});

test('Properly registers hits', () => {
  gameboard.placeAt([3, 3]);
  expect(gameboard.getHits().length).toBe(0);
  gameboard.receiveAttack([3, 3]);
  expect(gameboard.getHits().length).not.toBe(0);
});

test('Checks if all ships sank', () => {
  gameboard.placeAt([3, 3]);
  expect(gameboard.areAllSunk()).toBe(false);
  gameboard.receiveAttack([3, 3]);
  expect(gameboard.areAllSunk()).toBe(true);
});


