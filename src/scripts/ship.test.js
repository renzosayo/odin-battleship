// import { Ship, createShip } from "./ship";
// const createShip = require('./ship')
import createShip from "./ship";

const factoryShip = createShip(2);

test('Test if ship is sunk', () => {
  factoryShip.hit()
  expect(factoryShip.isSunk()).toBe(false);
  factoryShip.hit()
  expect(factoryShip.isSunk()).toBe(true);
});