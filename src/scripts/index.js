import createDomHandler from "./dom-handler";
import "../styles/styles.css";
import createPlayer from "./player";
import createShip from "./ship";
import createGameboard from "./gameboard";

function gameflow () {

  const domHandler = createDomHandler();
  const gameboard = createGameboard();
  const fleet = [
    createShip(5),
    createShip(4),
    createShip(3),
    createShip(3),
    createShip(2)
  ];

  const init = () => {
    domHandler.drawGrid(document.querySelector('.setup-board'));
    domHandler.loadShipsList(fleet);
    setListeners();
  }

  const setListeners = () => {
    // semi-global variables
    let direction = 'horizontal';
    let isValid = false;

    // showModal button
    const newGameBtn = document.querySelector('.new-game');
    newGameBtn.addEventListener('click', domHandler.openSetup);

    // closeModal
    const retreatBtn = document.querySelector('.retreat');
    retreatBtn.addEventListener('click', domHandler.closeSetup);
    
    const setupBoard = document.querySelector('.setup-board');
    setupBoard.addEventListener('click', (e) => {
      // clientX/Y uses coords relative to window
      // subtract board's position
      const setupPos = setupBoard.getBoundingClientRect();
      let x = (e.clientX - setupPos.left);
      let y = (e.clientY - setupPos.top);
      console.log(`${x}, ${y}`);
    });

    // setup grids listeners
    const grids = document.querySelectorAll('.setup-board .grid');
    grids.forEach((grid) => {
      // resets highlights and invalids
      grid.addEventListener('mouseenter', () => {
        document.querySelectorAll('.invalid')
          .forEach((grid) => {
            grid.classList.remove('invalid');
          });
        document.querySelectorAll('.highlight')
          .forEach((grid) => {
            grid.classList.remove('highlight');
          });
      });

      // add highlights on valid placements
      grid.addEventListener('mouseenter', (e) => {
        let length = fleet[0].getLength();

        // returns coordinates if valid, else false
        isValid = gameboard.checkPlacement(grid, length, direction, gameboard.shipPositions);
        if (isValid) {
          isValid.forEach((coord) => {
            let highlight = document.querySelector(`[coords="[${coord}]"]`);
            highlight.classList.add('highlight');
          });
        } else {
          e.target.classList.add('invalid');
        }
      });

      // listener for placing ships
      grid.addEventListener('click', () => {
        if (isValid) {
          let nextShip = fleet.shift();
          let coord = JSON.parse(grid.getAttribute('coords'));
          gameboard.placeShip(nextShip, coord, direction);

          // removes ships from right pane
          const shipsList = document.querySelector('.ships-list');
          shipsList.removeChild(shipsList.firstChild);

          // highlights occupied tiles
          isValid.forEach((coord) => {
            let occupied = document.querySelector(`[coords="[${coord}]"]`);
            occupied.classList.add('occupied');
          });
        } else {
          alert('Invalid placement!');
        }
      });
    });

    const rotateBtn = document.querySelector('.rotate-btn');
    rotateBtn.addEventListener('click', () => {
      if (direction === 'horizontal') direction = 'vertical';
      else direction = 'horizontal';
    });

    const fightBtn = document.querySelector('.fight');
    fightBtn.addEventListener('click', startGame);
  }

  const startGame = () => {
    document.querySelector('.new-game').classList.add('hide');
    domHandler.closeSetup();

    domHandler.drawGrid(document.querySelector('.player'), gameboard);

    domHandler.drawGrid(document.querySelector('.computer'));
    const computerGameboard = createGameboard();
    alert('startGame');
    
  }

  init();
}

gameflow();