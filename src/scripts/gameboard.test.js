// const createGameboard = require('./gameboard');
// const createShip = require('./ship');
import createGameboard from "./gameboard";
import createShip from "./ship";

const gameboard = createGameboard();

beforeEach(() => {
  gameboard.placeShip(createShip(2), [3, 3], 'horizontal');
});

afterEach(() => {
  gameboard.clear();
});

test('Places ship on board', () => {
  expect(gameboard.shipPositions[JSON.stringify([3, 3])]).toBeTruthy();
});

test('Places ship on board with direction', () => {
  expect(gameboard.shipPositions[JSON.stringify([3, 2])]).toBeUndefined();
  expect(gameboard.shipPositions[JSON.stringify([3, 3])]).toBeTruthy();
  expect(gameboard.shipPositions[JSON.stringify([4, 3])]).toBeTruthy();
});

test('receiveAttack() determines hit(true)/miss(false)', () => {
  expect(gameboard.receiveAttack([3, 3])).toBe(true);
  expect(gameboard.receiveAttack([4, 3])).toBe(true);
  expect(gameboard.receiveAttack([0, 0])).toBe(false);
});

test('Properly registers missed attacks', () => {
  expect(gameboard.getMisses().length).toBe(0);
  gameboard.receiveAttack([3, 2]);
  expect(gameboard.getMisses().length).not.toBe(0);
});

test('Properly registers hits', () => {
  expect(gameboard.getHits().length).toBe(0);
  gameboard.receiveAttack([3, 3]);
  expect(gameboard.getHits().length).not.toBe(0);
  gameboard.receiveAttack([4, 3]);
});

test('Checks if all ships sank', () => {
  expect(gameboard.areAllSunk()).toBe(false);
  gameboard.receiveAttack([3, 3]);
  gameboard.receiveAttack([4, 3]);
  expect(gameboard.areAllSunk()).toBe(true);
});


