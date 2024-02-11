import createDomHandler from "./dom-handler";
import createShip from "./ship";

const createGameboard = (player) => {
  let hits = [];
  let misses = [];
  let shipPositions = {};
  let activeShips = [];

  // does not check if occupied, would rely on gameflow to check
  const placeShip = (ship, coord, direction) => {
    let [x, y] = coord;
    let length = ship.getLength();
    activeShips.push(length);
    for (let i = 0; i < length; i++) {
      shipPositions[JSON.stringify([x, y])] = ship;
      if (direction === 'horizontal') 
        x += 1;
      else y -= 1;
    }
  }

  const receiveAttack = (coord) => {
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
  }

  const getHits = () => {
    return hits;
  }

  const getMisses = () => {
    return misses;
  }
  
  const areAllSunk = () => {
    if (activeShips.length < 1) return true;
    return false;
  }

  const clear = () => {
    hits = [];
    misses = [];
    shipPositions = {};
    activeShips = [];
  }

  // returns false if invalid, list of coordinates if valid
  const checkPlacement = (grid, length, direction) => {
    // parse and push coords into shipCoordinates
    let shipCoordinates = [];
    let [x, y] = JSON.parse(grid.getAttribute('coords'));
    if (direction === 'horizontal') {
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
      let [x, y] = coord;
      if (x > 9 || y > 9 || x < 0 || y < 0) 
        return invalid + 1;
      return invalid;
    }, 0);

    // checking if coord is already taken
    const countOccupiedCoords = shipCoordinates.reduce((invalid, coord) => {
      let strCoord = JSON.stringify(coord);
      if (shipPositions[strCoord])
        return invalid + 1;
      return invalid;
    }, 0);

    if (countOutOfBounds > 0 || countOccupiedCoords > 0) return false;
    return shipCoordinates;
  }

  const randomizeBoard = () => {
    let lengths = [5, 4, 3, 3, 2];
    const ships = lengths.map((ship) => {
      return createShip(ship);
    });

    while (ships.length > 0) {
      let ship = ships.shift();
      let isValid = false;
      let direction = 'horizontal';
      do {
        // random direction
        direction = (Math.floor(Math.random() * 2) === 0 ? 'horizontal': 'vertical');
        
        // mock grid
        let coords = JSON.stringify([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
        let grid = {
          getAttribute : () => coords,
          coords
        };
        isValid = checkPlacement(grid, ship.getLength(), direction, shipPositions);
      } while (!isValid);
      placeShip(ship, isValid[0], direction);
    }
  };

  const getRandomUnusedTile = () => {
    let coordStr = '';
    let x = 0;
    let y = 0;
    while (true) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      coordStr = JSON.stringify([x, y]);
      if (!hits.includes(coordStr) && !misses.includes(coordStr)) break;
    }
    return coordStr;
  }

  // should be in domHandler
  const highlightShips = () => {
    let positions = Object.keys(shipPositions);
      positions.forEach((coord) => {
        document.querySelector(`[coords="[${JSON.parse(coord)}]"]`)
          .classList.add('occupied');
    });
  }

  // draws board in console
  const drawBoard = () => {
    let string = '';
    for (let y = 9; y >= 0; y--) {
      for (let x = 0; x < 10; x++) {
        if (shipPositions[JSON.stringify([x, y])]) {
          string += 'o ';
        } else {
          string += '- ';
        }
      }
      string += '\n';
    }
    console.log(string);
  }

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
    shipPositions
  };
}

export default createGameboard;
