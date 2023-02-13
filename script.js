const gridContainer = document.querySelector('#grid-container')

function gridGenerator(num) {

    for (let i = 0; i < num ** 2; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'grid-square');
        gridContainer.appendChild(gridSquare);
    }
}

gridGenerator(8);