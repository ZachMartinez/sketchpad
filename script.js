const input = document.querySelector('input');
const button = document.querySelector('button');
const colorBtn = document.querySelector('.color');
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

function randColor () {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;/* Stuff that makes a random color */
}



button.addEventListener('click', () => {
    const size = input.value;
    const grid = makeGrid(size);
    let colorOn = false;
    let btnDwn = false;
    let fillColor = 'cornflowerblue'

    button.textContent = "Reset Grid";

    gridContainer.childNodes.forEach(child => child.remove());
    gridContainer.appendChild(grid);

    colorBtn.addEventListener('click', () => {
        colorOn = !colorOn;
    });

    document.addEventListener('mouseup', () => { /* Document scope prevents sticky mousedown bug */
        btnDwn = false;
    });

    grid.childNodes.forEach(cell => {
        cell.addEventListener('mouseover', () => { 
            if(btnDwn) {
                cell.style.background = fillColor;
                if(colorOn)
                    cell.style.background = randColor();
            }       
        });

        cell.addEventListener('mousedown', () => { 
            btnDwn = true;
            cell.style.background = fillColor;
            if(colorOn)
                cell.style.background = randColor();
            event.preventDefault();
        });
    });
});
