function createShip (length) {
  let shotsTaken = 0;
  let hasSunk = false;

  function hit () {
    shotsTaken += 1;
  }

  function isSunk () {
    if (shotsTaken >= length) {
      hasSunk = true;
      return true;
    } 
    return false;
  }

  return { hit, isSunk };
}

module.exports = createShip;