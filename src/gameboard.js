import createShip from "./ship";

function createGameboard () {
  let hits = [];
  let misses = [];
  // shipPositions is an array of objects
  let shipPositions = [];


  function placeAt (coords, length = 1, position = 'horizontal') {
    if (isValidPlacement()) {

    }
  }

  function isValidPlacement () {
    return true;
  }

  function clear () {
    hits = [];
    misses = [];
    shipPositions = [];
  }
  return { placeAt, receiveAttack, getHits, getMisses, areAllSunk, clear };
}