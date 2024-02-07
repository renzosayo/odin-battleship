function createGameboard () {
  let hits = [];
  let misses = [];
  let shipPositions = {};
  let activeShips = [];

  // does not check if occupied, would rely on gameflow to check
  function placeShip (ship, coord, direction) {
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

  function receiveAttack (coord) {
    // coords recorded in JSON for easy comparison
    let coordStr = JSON.stringify(coord);
    if (shipPositions[coordStr]) {
      let ship = shipPositions[coordStr];
      ship.hit();
      if (ship.isSunk()) {
        activeShips.splice(activeShips.indexOf(ship.getLength()), 1);
      }
      hits.push(coordStr);
      return true;
    } 
    misses.push(coordStr);
    return false;
  }

  function getHits () {
    return hits;
  }

  function getMisses () {
    return misses;
  }
  
  function areAllSunk () {
    if (activeShips.length < 1) return true;
    return false;
  }

  function clear () {
    hits = [];
    misses = [];
    shipPositions = [];
    activeShips = [];
  }

  const checkPlacement = (grid, length, direction, shipPositions) => {
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

  // draws board in console
  function drawBoard () {
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

  return { placeShip, receiveAttack, getHits, getMisses, areAllSunk, clear, shipPositions, drawBoard, checkPlacement  };
}

export default createGameboard;
//  module.exports = createGameboard;