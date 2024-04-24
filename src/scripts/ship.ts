type Ship = {
  hit: Function;
  isSunk: Function;
  getLength: Function;
};

function createShip(length: number): Ship {
  // closure in action with length variable
  let shotsTaken = 0;

  function hit(): void {
    shotsTaken += 1;
  }

  function isSunk(): boolean {
    if (shotsTaken >= length) {
      return true;
    }
    return false;
  }

  function getLength(): number {
    return length;
  }

  return { hit, isSunk, getLength };
}

// module.exports = createShip;
export default createShip;
