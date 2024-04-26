import { createFiveShips } from "./helpers";
import { Gameboard, Ship, ShipPosition, Coordinates, Grid } from "./types";

const createGameboard = (player: string): Gameboard => {
  let hits: string[] = [];
  let misses: string[] = [];
  let shipPositions: ShipPosition = {};
  let activeShips: number[] = [];

  // does not check if occupied, would rely on gameflow to check
  const placeShip = (ship: Ship, coord: string[], direction: string) => {
    let x = Number(coord[0]);
    let y = Number(coord[1]);
    let length: number = ship.getLength();
    activeShips.push(length);
    for (let i = 0; i < length; i++) {
      shipPositions[JSON.stringify([x, y])] = ship;
      if (direction === "horizontal") x += 1;
      else y -= 1;
    }
  };

  const receiveAttack = (coord: string[]) => {
    // coords recorded in JSON for easy comparison
    let coordStr = JSON.stringify(coord);
    if (shipPositions[coordStr]) {
      let ship = shipPositions[coordStr];
      ship.hit();
      if (ship.isSunk()) {
        // bug waiting to happen
        activeShips.splice(activeShips.indexOf(ship.getLength()), 1);
      }
      hits.push(coordStr);
      if (areAllSunk()) {
        return `${player}`;
      }
      return true;
    }
    misses.push(coordStr);
    return false;
  };

  const getHits = () => {
    return hits;
  };

  const getMisses = () => {
    return misses;
  };

  const areAllSunk = () => {
    if (activeShips.length < 1) return true;
    return false;
  };

  const clear = () => {
    hits = [];
    misses = [];
    shipPositions = {};
    activeShips = [];
  };

  // returns false if invalid, list of coordinates if valid
  const checkPlacement = (grid: Grid, length: number, direction: string) => {
    // parse and push coords into shipCoordinates
    let shipCoordinates: Coordinates[] = [];
    let [x, y] = JSON.parse(grid.getAttribute("coords")!);
    if (direction === "horizontal") {
      for (let i = 0; i < length; i++) {
        shipCoordinates.push([x, y]);
        x += 1;
      }
    } else {
      for (let i = 0; i < length; i++) {
        shipCoordinates.push([x, y]);
        y -= 1;
      }
    }

    // checking if out of bounds
    const countOutOfBounds = shipCoordinates.reduce((invalid, coord) => {
      let x = Number(coord[0]);
      let y = Number(coord[1]);
      if (x > 9 || y > 9 || x < 0 || y < 0) return invalid + 1;
      return invalid;
    }, 0);

    // checking if coord is already taken
    const countOccupiedCoords = shipCoordinates.reduce((invalid, coord) => {
      let strCoord = JSON.stringify(coord);
      if (shipPositions[strCoord]) return invalid + 1;
      return invalid;
    }, 0);

    if (countOutOfBounds > 0 || countOccupiedCoords > 0) return false;
    return shipCoordinates;
  };

  const randomizeBoard = () => {
    const ships = createFiveShips();

    while (ships.length > 0) {
      let ship = ships.shift()!;
      let isValid: boolean | Coordinates[] = false;
      let direction = "horizontal";
      do {
        // random direction
        direction =
          Math.floor(Math.random() * 2) === 0 ? "horizontal" : "vertical";

        // mock grid
        let coords = JSON.stringify([
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ]);
        let grid: Grid = {
          getAttribute: () => coords,
          coords,
        };
        isValid = checkPlacement(grid, ship.getLength(), direction);
      } while (!isValid);
      placeShip(ship, isValid[0], direction);
    }
  };

  const getRandomUnusedTile = () => {
    let coordStr = "";
    let x = 0;
    let y = 0;
    // can potentially cause long loading, but shouldn't cause an infinite loop
    while (true) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      coordStr = JSON.stringify([x, y]);
      if (!hits.includes(coordStr) && !misses.includes(coordStr)) break;
    }
    return coordStr;
  };

  // should be in domHandler
  const highlightShips = () => {
    let positions = Object.keys(shipPositions);
    positions.forEach((coord) => {
      document
        .querySelector(`[coords="[${JSON.parse(coord)}]"]`)!
        .classList.add("occupied");
    });
  };

  // draws board in console
  const drawBoard = () => {
    let string = "";
    for (let y = 9; y >= 0; y--) {
      for (let x = 0; x < 10; x++) {
        if (shipPositions[JSON.stringify([x, y])]) {
          string += "o ";
        } else {
          string += "- ";
        }
      }
      string += "\n";
    }
    console.log(string);
  };

  return {
    placeShip,
    receiveAttack,
    getHits,
    getMisses,
    areAllSunk,
    clear,
    drawBoard,
    checkPlacement,
    randomizeBoard,
    getRandomUnusedTile,
    highlightShips,
    shipPositions,
  };
};

export default createGameboard;
