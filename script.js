const input = document.querySelector('input');
const button = document.querySelector('button');
const gridContainer = document.querySelector('.grid-container');


function makeGrid (n) {
    const grid = document.createElement('div');
          grid.classList.add('grid'); 

    const cell = document.createElement('div');
          cell.classList.add('cell');

    for (j = 0; j < n; j++) { /* Repeat columns */ 
        for (i = 0; i < n; i++) {
            const newCell = cell.cloneNode(); /* Make each cell appear one grid-row below previous */
                  newCell.style.gridRow = i + 1; /* Grid rows start at 1 */
    
            grid.appendChild(newCell);
        }
    }

    return grid;
}

button.addEventListener('click', () => {
    const size = input.value;
    const grid = makeGrid(size);
    let btnDwn = false;

    button.textContent = "Reset Grid";

    gridContainer.childNodes.forEach(child => child.remove());
    gridContainer.appendChild(grid);

    grid.addEventListener('mouseup', () => {
        btnDwn = false;
    });

    grid.childNodes.forEach(cell => {
        cell.addEventListener('mouseover', () => { 
            if(btnDwn)
                cell.classList.add('-filled');
        });

        cell.addEventListener('mousedown', () => { 
            btnDwn = true;
            cell.classList.add('-filled');
        });
    });
});
