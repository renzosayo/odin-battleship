import createDomHandler from "./dom-handler";
import "../styles/styles.css";
import createPlayer from "./player";
import createGameboard from "./gameboard";

function gameflow () {

  const domHandler = createDomHandler();

  const init = () => {
    domHandler.drawGrid(document.querySelector('.setup-board'));
    domHandler.loadShipsList();
    setListeners();
  }

  const setListeners = () => {
    // showModal button
    const newGameBtn = document.querySelector('.new-game');
    newGameBtn.addEventListener('click', domHandler.openSetup);
    
    const setupBoard = document.querySelector('.setup-board');
    setupBoard.addEventListener('click', (e) => {
      // clientX/Y uses coords relative to window
      // subtract board's position
      const setupPos = setupBoard.getBoundingClientRect();
      let x = (e.clientX - setupPos.left);
      let y = (e.clientY - setupPos.top);
      console.log(`${x}, ${y}`);
    });
    // setup grids listener
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
      // resets highlights
      grid.addEventListener('mouseenter', () => {
        document.querySelectorAll('.highlight')
          .forEach((grid) => {
            grid.classList.remove('highlight');
          });
      });
      // add highlights on
      grid.addEventListener('mouseenter', () => {
        let length = 5;
        // returns coordinates if valid, else false
        let isValid = domHandler.checkPlacement(grid, length);
        if (isValid) {
          isValid.forEach((coord) => {
            let highlight = document.querySelector(`[coords="[${coord}]"]`);
            highlight.classList.add('highlight');
          });
        }
      });
    });
  }

  init();
}

gameflow();