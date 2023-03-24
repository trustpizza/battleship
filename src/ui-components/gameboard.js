// This will be the ui representation of the gameboard
export default function GameBoard() {
    function cellFactory(x,y) {
        const cell = document.createElement('div');
        cell.className =
            "border border-black h-8 w-8 md:h-20 md:w-20 bg-blue-50 hover:bg-blue-100";
        cell.setAttribute('cell', 'cell')
        cell.setAttribute("location", [x,y]);
    
        return cell;
    }
    const board = document.createElement('div');
    board.className = 
        "grid grid-rows-10 grid-cols-10";

    const cells = []

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = cellFactory(i,j);
            board.appendChild(cell)    
            cells.push(cell)
        };
    };

    const boardUI = {
        board,
        cells,
        updateUI (gameboard) {
            gameboard.board.forEach(row => {
                row.forEach(cell => {
                    if (cell) {
                        const indices = []
                        const rowCopy = Array.from(row);
                        let idx = rowCopy.indexOf(cell);
                        while (idx !== -1){
                            indices.push([gameboard.board.indexOf(row), idx]);
                            idx = rowCopy.indexOf(cell, idx + 1)
                        }
                        indices.forEach(index => {
                            const target = this.board.querySelector(`[location='${index[0]},${index[1]}']`)
                            target.classList.add("bg-gray-300", "hover:bg-gray-300")
                        })
                    }
                })
            })
        }
    }

    // Update function

    return boardUI;
}



