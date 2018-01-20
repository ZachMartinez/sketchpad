const gridContainer = document.querySelector(".grid-container");

function makeGrid (n) {
    for
}

function makeColumn (n) {
    const column = document.createElement("div");
    column.classList.add("column");

    const cell = document.createElement("div");
    const cellSize = gridContainer.offsetWidth / n;
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    for (i = 0; i < n; i++) {
        column.appendChild(cell.cloneNode());
        console.log(column.childElementCount);
    }

    gridContainer.appendChild(column);
}