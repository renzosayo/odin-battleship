const createDomHandler = () => {

  const dialog = document.querySelector('.setup');

  const openSetup = () => {
    dialog.showModal();
    dialog.classList.add('show');
  }

  const closeSetup = () => {
    dialog.close(); 
    dialog.classList.remove('show');
  }

  const drawGrid = (div, gameboard = null) => {
    // reset div before adding new content
    while (div.firstChild)  div.removeChild(div.firstChild);

    // slice needed because computed style includes 'px'
    const divStyle = getComputedStyle(div);
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

  const clearGrids = () => {
    document.querySelector('.player').innerHTML = '';
    document.querySelector('.computer').innerHTML = '';
  }

  return { openSetup, drawGrid, loadShipsList, closeSetup, clearGrids };
}

export default createDomHandler;