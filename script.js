



function drawRow () {
    const grid = document.querySelector('.grid');

    const cell = document.createElement('div');
          cell.classList.add('cell');

    for (i = 0; i < 16; i++) {
        grid.appendChild(cell.cloneNode());
    }
}

function drawCol () {    /* Draws a column of cells in the grid */
    const grid = document.querySelector('.grid'); /* Get grid element*/

    const cell = document.createElement('div'); /* Create cell */
          cell.classList.add('cell');

    for (i = 0; i < 16; i++) {
        const newCell = cell.cloneNode(); /* Make each cell appear one grid-row below previous */
              newCell.style.gridRow = i + 1;

        grid.appendChild(newCell);
    }
}