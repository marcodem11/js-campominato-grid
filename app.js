const selectElement = document.getElementById('mode');
const playButton = document.getElementById('play');

const startGame = () => {
    console.log('Inizia il gioco');

    const mode = parseInt (selectElement.value)
    let rows;
    let columns;
    let cellSize;
    console.log(mode)

    switch(mode) {
        case 1:
            rows = 10;
            columns = 10;
            break;
        case 2:
            rows = 9;
            columns = 9;
            break;
        case 3:
            rows = 7;
            columns = 7;
            break;
        default:
            rows = 10;
            columns = 10;
    }

    const cellNumber = rows * columns;
    cellSize = `calc(100% / ${columns})`;
    console.log (rows, columns, cellNumber);

    gridElement.innerHTML = '';
    
    for( let i=0; i< cellNumber; i++) {
        const cell = document.createElement('div');
        cell.style.width = cellSize;
        cell.append(i + 1);
        cell.classList.add('cell');
        gridElement.appendChild(cell);
    }

}