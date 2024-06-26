import createDomHandler from "./dom-handler";
import "../styles/styles.css";
import createShip from "./ship";
import createGameboard from "./gameboard";
import { Coordinates, Ship } from "./types";

function gameflow() {
  const domHandler = createDomHandler();
  const gameboard = createGameboard("Player");
  const computerGameboard = createGameboard("Computer");
  let fleet: Ship[] = [];
  let direction = "horizontal";

  const init = () => {
    setListeners();
  };

  const setListeners = () => {
    // showModal button
    const newGameBtn = document.querySelector(".new-game")!;
    newGameBtn.addEventListener("click", newGame);

    // closeModal
    const retreatBtn = document.querySelector(".retreat")!;
    retreatBtn.addEventListener("click", domHandler.closeSetup);

    const fightBtn = document.querySelector(".fight")!;
    fightBtn.addEventListener("click", startGame);

    const rotateBtn = document.querySelector(".rotate-btn")!;
    rotateBtn.addEventListener("click", () => {
      if (direction === "horizontal") direction = "vertical";
      else direction = "horizontal";
    });
  };

  const setGridListeners = () => {
    // setup grids listeners
    const grids = document.querySelectorAll(".setup-board .grid")!;
    grids.forEach((grid) => {
      let isValid: false | Coordinates[] = false;

      // for refactor: move to domhandler
      // resets highlights and invalids
      grid.addEventListener("mouseenter", () => {
        document.querySelectorAll(".invalid").forEach((grid) => {
          grid.classList.remove("invalid");
        });
        document.querySelectorAll(".highlight").forEach((grid) => {
          grid.classList.remove("highlight");
        });
      });

      // add highlights on valid placements
      grid.addEventListener("mouseenter", function check(e) {
        if (fleet.length === 0) {
          grids.forEach((grid) => {
            grid.removeEventListener("mouseenter", check);
          });
        } else {
          let length = fleet[0].getLength();

          // returns coordinates if valid, else false
          isValid = gameboard.checkPlacement(grid, length, direction);
          if (isValid) {
            isValid.forEach((coord) => {
              let highlight = document.querySelector(`[coords="[${coord}]"]`)!;
              highlight.classList.add("highlight");
            });
          } else {
            const target = e.target as Element;
            target.classList.add("invalid");
          }
        }
      });

      // listener for placing ships
      grid.addEventListener("click", () => {
        let length = fleet[0].getLength();
        isValid = gameboard.checkPlacement(grid, length, direction);
        if (isValid) {
          let nextShip = fleet.shift();
          let coord = JSON.parse(grid.getAttribute("coords") || "");
          gameboard.placeShip(nextShip, coord, direction);

          // removes ships from right pane
          const shipsList = document.querySelector(".ships-list")!;
          if (shipsList.firstChild) shipsList.removeChild(shipsList.firstChild);
          if (shipsList.firstChild === null) {
            document.querySelector(".fight")!.classList.remove("disabled");
          }

          // highlights occupied tiles
          isValid.forEach((coord) => {
            let occupied = document.querySelector(`[coords="[${coord}]"]`)!;
            occupied.classList.add("occupied");
          });
        } else {
          alert("Invalid placement!");
        }
      });
    });
  };

  const newGame = () => {
    // reset
    gameboard.clear();
    computerGameboard.clear();
    domHandler.clearGrids();
    domHandler.openSetup();
    fleet = [
      createShip(5),
      createShip(4),
      createShip(3),
      createShip(3),
      createShip(2),
    ];

    domHandler.drawGrid(document.querySelector(".setup-board")!);
    domHandler.loadShipsList();
    setGridListeners();

    document.querySelector(".fight")!.classList.add("disabled");
  };

  const startGame = () => {
    document.querySelector(".new-game")!.classList.add("hide");
    domHandler.closeSetup();

    domHandler.drawGrid(document.querySelector(".player")!);
    domHandler.drawGrid(document.querySelector(".computer")!);

    computerGameboard.randomizeBoard();
    gameboard.highlightShips();
    const enemyGrid = document.querySelectorAll(".computer .grid");
    enemyGrid.forEach((grid) => {
      grid.addEventListener("click", function attack() {
        // your attack
        let coord = JSON.parse(grid.getAttribute("coords") || "");

        // can return true, if hit, false, if miss, or player name if all ships are sunk
        let attackResult = computerGameboard.receiveAttack(coord);
        if (attackResult) {
          grid.classList.add("hit");
          if (typeof attackResult === "string") gameOver(attackResult);
        } else {
          grid.classList.add("miss");
          setTimeout(enemyTurn, 500);
        }
        grid.removeEventListener("click", attack);
      });
    });
  };

  const enemyTurn = () => {
    let attackedCoord = JSON.parse(gameboard.getRandomUnusedTile());
    let attackedTile = document.querySelector(`[coords="[${attackedCoord}]"]`)!;
    let attackResult = gameboard.receiveAttack(attackedCoord);
    if (attackResult) {
      attackedTile.classList.add("hit");
      if (typeof attackResult === "string") gameOver(attackResult);
      setTimeout(enemyTurn, 500);
    } else attackedTile.classList.add("miss");
  };

  const gameOver = (player: string) => {
    alert(player + " defeated!");
    document.querySelector(".new-game")!.classList.remove("hide");
  };

  init();
}

gameflow();
