const createDomHandler = () => {

  const dialog = document.querySelector('.setup');

  const openSetup = () => {
    dialog.showModal();
  }

  const closeSetup = () => {
    dialog.close(); 
  }

  const drawGrid = (div, gameboard = null) => {
    const divStyle = getComputedStyle(div);

    // slice needed because computed style includes 'px'
    let width = divStyle.width.slice(0, -2) / 10;

    for (let y = 9; y >= 0; y--) {
      for (let x = 0; x < 10; x++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = `${ width }px`;
        grid.style.width = `${ width }px`;
        grid.setAttribute('coords', JSON.stringify([x, y]));
        div.appendChild(grid);
      }
    }

    if (gameboard) {
      let positions = Object.keys(gameboard.shipPositions);
      positions.forEach((coord) => {
        document.querySelector(`[coords="[${JSON.parse(coord)}]"]`)
          .classList.add('occupied');
      });
    }
  }

  const loadShipsList = () => {
    const shipsList = document.querySelector('.ships-list');
    let shipNames = ['Carrier (5)', 'Battleship (4)', 'Cruiser (3)', 'Submarine (3)', 'Destroyer (2)'];
    shipNames.forEach((ship) => {
      const shipBtn = document.createElement('button');
      shipBtn.textContent = ship;
      shipBtn.setAttribute('type', 'button');
      shipsList.appendChild(shipBtn);
    });
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

  return { openSetup, drawGrid, loadShipsList, checkPlacement, closeSetup };
}

export default createDomHandler;