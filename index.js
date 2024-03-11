const chessboard = document.getElementById('chessboard');

const createChessboard = () => {
    const rows = Number(document.getElementById('rows').value);
    const columns = Number(document.getElementById('columns').value);


    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        chessboard.appendChild(row);

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            const isBlack = (i + j) % 2 === 1;
            cell.style.backgroundColor = isBlack ? 'black' : 'white';
            cell.style.color = isBlack ? 'white' : 'black';
            row.appendChild(cell);
        }
    }
};

const toggleAllCellColors = () => {
    const cells = chessboard.getElementsByTagName('td');

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.style.backgroundColor = cell.style.backgroundColor === 'black' ? 'white' : 'black';
        cell.style.color = cell.style.backgroundColor === 'black' ? 'white' : 'black';
    }
};

chessboard.addEventListener('click', toggleAllCellColors);

createChessboard();
