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
          if (shipsList.firstChild === null) {
            const fightBtn = document.querySelector('.fight');
            fightBtn.addEventListener('click', startGame);
            fightBtn.classList.remove('disabled');
          }

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

  }

  const startGame = () => {
    document.querySelector('.new-game').classList.add('hide');
    domHandler.closeSetup();

    domHandler.drawGrid(document.querySelector('.player'), gameboard);

    domHandler.drawGrid(document.querySelector('.computer'));
    const computerGameboard = createGameboard();
    computerGameboard.randomizeBoard();
    const enemyGrid = document.querySelectorAll('.computer .grid');
    enemyGrid.forEach((grid) => {
      grid.addEventListener('click', () => {
        // your attack
        let coord = JSON.parse(grid.getAttribute('coords'));
        if(computerGameboard.receiveAttack(coord)) {
          grid.classList.add('hit');
        }
        else {
          grid.classList.add('miss');
          setTimeout(enemyTurn, 500);
        }

        // enemy attack
        
      });
    });
  }

  const enemyTurn = () => {
    let attackedCoord = JSON.parse(gameboard.getRandomUnusedTile());
    let attackedTile = document.querySelector(`[coords="[${attackedCoord}]"]`);
    if (gameboard.receiveAttack(attackedCoord)) {
      attackedTile.classList.add('hit');
      setTimeout(enemyTurn, 500);
    }
    else attackedTile.classList.add('miss');
  }

  init();
}

gameflow();