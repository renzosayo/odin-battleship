function createShip (length) {
  // closure in action with length variable
  let shotsTaken = 0;

  function hit () {
    shotsTaken += 1;
  }

  function isSunk () {
    if (shotsTaken >= length) {
      return true;
    } 
    return false;
  }

  function getLength() {
    return length;
  }

  return { hit, isSunk, getLength };
}

module.exports = createShip;