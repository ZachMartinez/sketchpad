const grid = document.querySelector(".grid");

function drawCol () {    /* Draws a column of cells in the grid */
    const grid = document.querySelector('.grid'); 

    const cell = document.createElement('div'); 
          cell.classList.add('cell');

    for (i = 0; i < 16; i++) {
        const newCell = cell.cloneNode(); /* Make each cell appear one grid-row below previous */
              newCell.style.gridRow = i + 1; /* Grid rows start at 1 */

        grid.appendChild(newCell);
    }
}