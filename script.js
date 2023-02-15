let num;
let cellSize;
let colourSwitch = 2;
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
            changeCellColour(colourSwitch, cell);
        })
    }
}


/* original changecellColour function, saving it here in case my edits mess things up

function changeCellColour(colourSwitch, cell) {
    if (colourSwitch == 0) {
        cell.style.cssText += "background-color: black";
    } else if (colourSwitch == 1) {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`;
        cell.style.cssText += `background-color: ${rgb}`;
        console.log(rgb);
        let rgbReport = cell.style.getPropertyValue('background-color');
        let rgbSplit = rgb.split(/[(),]/);
        console.log(rgbSplit);
    }
}

*/





function changeCellColour(colourSwitch, cell) {
    if (colourSwitch == 0) {
        cell.style.cssText += "background-color: black";
    } else if (colourSwitch == 1) {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`;
        cell.style.cssText += `background-color: ${rgb}`;
    } else if (colourSwitch == 2) {
        if (cell.style.getPropertyValue('background-color') == "") {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                const r = randomBetween(0, 255);
                const g = randomBetween(0, 255);
                const b = randomBetween(0, 255);
                const rgb = `rgb(${r},${g},${b})`;
            cell.style.cssText += `background-color: ${rgb}`;
        } else {
            let rgbReport = cell.style.getPropertyValue('background-color');
            let rgbSplit = rgbReport.split(/[(),\s]/);
            let rDarker = Math.floor(rgbSplit[1] * .9);
            let gDarker = Math.floor(rgbSplit[3] * .9);
            let bDarker = Math.floor(rgbSplit[5] * .9);
            let rgbDarker = `rgb(${rDarker},${gDarker},${bDarker})`;
            cell.style.cssText += `background-color: ${rgbDarker}`;
        }
    }
}