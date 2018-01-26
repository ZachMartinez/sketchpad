const grid = document.querySelector('.grid'); 

const drawGrid = () => {
    const cell = document.createElement('div'); 
          cell.classList.add('cell');

    for (j = 0; j < 16; j++) { /* Repeat columns */ 
        for (i = 0; i < 16; i++) {
            const newCell = cell.cloneNode(); /* Make each cell appear one grid-row below previous */
                  newCell.style.gridRow = i + 1; /* Grid rows start at 1 */
    
            grid.appendChild(newCell);
        }
    }
}

