import createDomHandler from "./dom-handler";

const domHandler = createDomHandler();
const grid = { 
  'coords': '[90, 0]',
  getAttribute: (coords) => {
    return grid[coords];
  }
};

const grid2 = { 
  'coords': '[0, 0]',
  getAttribute: (coords) => {
    return grid[coords];
  }
};

// const grid2 = document.createElement('div');
// grid.setAttribute('coords', '[0,0]');

test.only('returns invalid', () => {
  expect(domHandler.checkPlacement(grid, 2)).toBe(false);
});

test('returns valid', () => {
  expect(domHandler.checkPlacement(grid2, 2)).toBeTruthy();
});