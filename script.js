let num;
let gridSize;

function getSize() {
    num = parseInt(prompt("Grid size, please"));
    gridContainer.innerHTML = "";
    setGridSize(num);
    gridGenerator(num);
}

function setGridSize(num) {
//    gridSize = (parseInt(Math.floor((((gridContainer.offsetWidth)) / num))));
    gridSize = gridContainer.offsetWidth / num;
    console.log(gridSize);


/* 
    switch(num) {
        case 0:
            break;
        case 1:
            gridSize = 100;
            break;
        case 2:
            gridSize = 49;
            break;
        case 3:
            gridSize = 33;
            break;
        case 4:
            gridSize = 24;
            break;
        case 5:
            gridSize = 19;
            break;
        case 6:
            gridSize = 16;
            break;
        case 7:
            gridSize = 13.5;
            break;
        case 8:
            gridSize = 12;
            break;
        case 9:
            gridSize = 10.8;
            break;
        case 10:
            gridSize = 9;
            break;
        case 11:
            gridSize = 8.5;
            break;
        case 12:
            gridSize = 7.5;
            break;
        case 13:
            gridSize = 7;
            break;
        case 14:
            gridSize = 6.5;
            break;
        case 15:
            gridSize = 5.8;
            break;
        case 16:
            gridSize = 5.5;
            break;
        case 17:
            gridSize = 5.3;
            break;
        case 18:
            gridSize = 5.3;
            break;
        default:
            gridSize = 12;
    }

 */


}





const gridContainer = document.querySelector('.grid-container');

function gridGenerator(num) {
    for (let i = 1; i <= num ** 2; i++) {
        let gridSquare = document.createElement('div')
        gridSquare.setAttribute('class','grid-item')
//        gridSquare.textContent = `${i}`
        gridSquare.style.cssText += `flex: 0 ${gridSize}px;width:${gridSize}`;
        gridContainer.appendChild(gridSquare)

        gridSquare.addEventListener('mouseover', event => {
//            console.log("Mouse in");
            gridSquare.style.cssText += "background-color: black";
        });
        gridSquare.addEventListener("mouseout", event => {
//            console.log("Mouse out");
        })
    }
}


