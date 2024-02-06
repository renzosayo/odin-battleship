const createDomHandler = () => {
  const openSetup = () => {
    const dialog = document.querySelector('.setup');
    dialog.showModal();
  }

  const drawGrid = (div) => {
    // window's [0, 0] is at top left, but the grid's should be at bottom left
    for (let y = 9; y >= 0; y--) {
      for (let x = 0; x < 10; x++) {
        const divStyle = getComputedStyle(div);
        const grid = document.createElement('div');
        grid.classList.add('grid');
        // slice needed because computed style includes 'px'
        grid.style.height = `${ divStyle.width.slice(0, -2) / 10  }px`;
        grid.style.width = `${ divStyle.width.slice(0, -2) / 10 }px`;
        grid.setAttribute('coords', JSON.stringify([x, y]));
        grid.addEventListener('click', () => {
          alert(grid.getAttribute('coord'));
        });

        div.appendChild(grid);
      }
    }
  }

  const loadShipsList = () => {
    const shipsList = document.querySelector('.ships-list');
    let ships = ['Carrier (5)', 'Battleship (4)', 'Cruiser (3)', 'Submarine (3)', 'Destroyer (2)'];
    ships.forEach((ship) => {
      const shipBtn = document.createElement('button');
      shipBtn.textContent = ship;
      shipBtn.setAttribute('type', 'button');
      shipsList.appendChild(shipBtn);
    });
  }

  const isValidPlacement = (coords) => {
    
  }

  /*const placeShips = () => {
    const setupBoard = document.querySelector('.setup-board');
    setupBoard.addEventListener('mousemove', () => {
      // get current coord
      // get ship length
      // get relative coord
      // send to isValidPlacement

    });
  }*/

  const checkPlacement = (grid, length, direction = 'horizontal') => {
    // setup
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
    console.log(shipCoordinates);

    // checking
    const result = shipCoordinates.reduce((invalid, coord) => {
      let [x, y] = coord;
      if (x > 9 || y > 9 || x < 0 || y < 0) 
        return invalid + 1;
      return invalid;
    }, 0);
    if (result > 0) return false;
    return shipCoordinates;
  }

  return { openSetup, drawGrid, loadShipsList, checkPlacement };
}

export default createDomHandler;