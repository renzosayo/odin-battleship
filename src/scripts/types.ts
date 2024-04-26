type Ship = {
  hit: Function;
  isSunk: Function;
  getLength: Function;
};

type Gameboard = {
  placeShip: Function;
  receiveAttack: Function;
  getHits: Function;
  getMisses: Function;
  areAllSunk: Function;
  clear: Function;
  checkPlacement: Function;
  randomizeBoard: Function;
  getRandomUnusedTile: Function;
  highlightShips: Function;
  drawBoard: Function;
  shipPositions: object;
};

interface ShipPosition {
  [key: string]: Ship;
}

type Grid = {
  getAttribute: Function;
  coords: string;
};

type Coordinates = [string, string];

export { Ship, Gameboard, ShipPosition, Coordinates, Grid };
