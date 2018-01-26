const grid = document.querySelector('.grid');
const input = document.querySelector('input');
const button = document.querySelector('button');

function fillGrid (n) {
    const cell = document.createElement('div'); 
          cell.classList.add('cell');

    for (j = 0; j < n; j++) { /* Repeat columns */ 
        for (i = 0; i < n; i++) {
            const newCell = cell.cloneNode(); /* Make each cell appear one grid-row below previous */
                  newCell.style.gridRow = i + 1; /* Grid rows start at 1 */
    
            grid.appendChild(newCell);
        }
    }
}

function clearGrid() {
    const cells = Array.from(grid.childNodes);
    cells.forEach(cell => cell.remove());
}

function makeGrid () {
    const size = input.value;
    clearGrid();
    document.documentElement.style.setProperty('--grid-size', size);
    fillGrid(size);
}

button.addEventListener('click', makeGrid);


