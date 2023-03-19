function IllegalMove(message) {
    this.message = message;
    this.name = "IllegalMove";
}

function GameboardFactory() {
    function buildBoard() {
        const board = [];
        for (let i = 0; i < 10; i++) {
            let row = [];
            for (let i = 0; i < 10; i++) {
                row.push(null)                
            }
            board.push(row);
        }   
        return board
    }

    function checkForLegalMove(ship, coords, horizontal, board) {
        validateMoveIsOnBoard(ship, coords, horizontal);
        validateOverlap(ship, coords, horizontal, board);
    }
    
    function validateMoveIsOnBoard(ship, coords, horizontal) {
        if (horizontal) {
            if (coords[1] + ship.length - 1 > 9 || coords[1] < 0) {
                throw new IllegalMove("Illegal Move: The ship must be entirely on the board")
            }
        } else if (!horizontal) {
            if (coords[0] < 0 || coords[0] + ship.length - 1 > 9 ) {
                throw new IllegalMove(`Illegal Move: The ship must be entirely on the board`)
            }
        }
    }

    function validateOverlap(ship, coords, horizontal, board) {
        const futurePositions = [];
        if (horizontal) {
            for (let i = 0; i < ship.length; i++) {
                futurePositions.push([coords[0], coords[1]+i])                
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                futurePositions.push([coords[1]+i, coords[1]])
            }
        };

        // return futurePositions;

        for (let i = 0; i < futurePositions.length; i++) {
            const coords = futurePositions[i];
            if (board[coords[0]][coords[1]] !== null) { 
                throw new IllegalMove("Illegal Move: Ship cannot overlap with another ship") 
            }
        }
        // Check each of the futurePosition on the board, if they are not null, return error
    }
    
    const gameboard = {
        board: buildBoard(),
        placeShip (ship, coords, horizontal) {
            checkForLegalMove(ship, coords, horizontal, this.board)

            if (horizontal) {
                for (let i = coords[1]; i < coords[1]+ship.length; i++) {
                    this.board[coords[0]][i] = ship             
                }
            } else if (!horizontal) {
                for (let i = coords[0]; i < coords[0]+ship.length; i++) {
                    this.board[i][coords[1]] = ship
                }
            } 
        },
    }

    return gameboard
};

export default GameboardFactory;