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

    function getLocationFromCell(cell) {
        const loc = [];
        const cellLocation = cell.getAttribute("location").split(",")
        cellLocation.forEach(val => {
            loc.push(parseInt(val))
        })

        return loc;
    }

    function getRowsFromGameboard(gameboard) {
        const gameboardRows = [];

        for (let i = 0; i < gameboard.board.length; i++) {
            const row = gameboard.board[i];
            gameboardRows[i] = row;
        }

        return gameboardRows;
    };
    

    function getColsFromGameboard(gameboard) {
        const gameboardColumns = {};

        for (let i = 0; i < gameboard.board.length; i++) {
            const row = gameboard.board[i];
            const col = [];
            for (let j = 0; j < row.length; j++) {
                const element = col[j];
                col.push(gameboard.board[j][i])
            }
            gameboardColumns[i] = col;
        }
        return gameboardColumns;
    };

    let Unique = (arr) => {
        let uniques = [];
    
        let itemsFound = {};
    
        for(let val of arr) {
            let stringified = JSON.stringify(val);
    
            if(itemsFound[stringified]) { 
               continue; 
            }
    
            uniques.push(val);
    
            itemsFound[stringified] = true;
        }

        return uniques;
    };
    
    function findCellsFromRow(gameboard) {
        const rows = getRowsFromGameboard(gameboard);

        const indicies = [];
        rows.forEach(row => {
            row.forEach(cell => {
                let idx = row.indexOf(cell);
                if (cell) {
                    while (idx !== -1) {
                        indicies.push([gameboard.board.indexOf(row), idx]);
                        idx = row.indexOf(cell, idx+1);
                    }
                }
            });
        })

        return Unique(indicies);
    }

    const boardUI = {
        board,
        cells,
        updateUI (gameboard) {
            const cellsWithShips = findCellsFromRow(gameboard);
            console.log(cellsWithShips)
            cellsWithShips.forEach(index => {
                const target = this.board.querySelector(`[location='${index[0]},${index[1]}']`);
                target.classList.add("bg-gray-300", "hover:bg-gray-300");
            });
        },
        showShipOnHover (ship, target, gameboard, horizontal) {
            if (horizontal) {
                const futureShipLocations = 1;
                const rows = getRowsFromGameboard(gameboard);
                const cells = [];
                const cellLocation = getLocationFromCell(target);

                for (let i = 0; i < ship.length; i++) {
                    if ((cellLocation[1] + ship.length - 1) > 9) {
                        break;
                    } else {
                        cells.push([cellLocation[0], cellLocation[1]+i])                   
                    }
                };

                cells.forEach(index => {
                    const target = this.board.querySelector(`[location='${index[0]},${index[1]}']`);
                    target.classList.add("bg-gray-300", "hover:bg-gray-300");
                })
            }
        },
        resetHover (gameboard) {
            // while (this.board.firstChild) {
            //     this.board.removeChild(this.board.firstChild)
            // }
            // const allLocations = []
            // for (const cell of this.cells) {
            //     const location = getLocationFromCell(cell);
            //     console.log(location);
            // }
        }
    }

    // Update function

    return boardUI;
}



