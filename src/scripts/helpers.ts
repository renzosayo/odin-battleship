import { Ship } from "./types";
import createShip from "./ship";

const createFiveShips = (): Ship[] => {
  // modify to change ship sizes
  let lengths = [5, 4, 3, 3, 2];
  const ships = lengths.map((ship) => {
    return createShip(ship);
  });
  return ships;
};

export { createFiveShips };
