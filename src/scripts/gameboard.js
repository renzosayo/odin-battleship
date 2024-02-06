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
  return { placeShip, receiveAttack, getHits, getMisses, areAllSunk, clear, shipPositions };
}

export default createGameboard;
//  module.exports = createGameboard;