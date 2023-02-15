let num;
let cellSize;
const gridContainer = document.querySelector('.grid-container');

function getSize() {
    num = parseInt(prompt("Grid size, please"));
    gridContainer.innerHTML = "";
    setCellSize(num);
    gridGenerator(num);
}

function setCellSize(num) {
    cellSize = gridContainer.offsetWidth / num;
}

function gridGenerator(num) {
    for (let i = 1; i <= num ** 2; i++) {
        let cell = document.createElement('div')
        cell.setAttribute('class','cell')
        cell.style.cssText += `flex: 0 ${cellSize}px;width:${cellSize}`;
        gridContainer.appendChild(cell)
        cell.addEventListener('mouseover', event => {
            cell.style.cssText += "background-color: black";
            console.log(cell.style.getPropertyValue('background-color'));
        });
    }
}
