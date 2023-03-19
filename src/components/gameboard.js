function IllegalMove(message) {
    this.message = message;
    this.name = "IllegalMove";
}

function IllegalAttack(message) {
    this.message = message;
    this.name = "IllegalAttack"
}

function GameboardFactory() {
    function buildBoard() {
        const board = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
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

    function checkForLegalAttack(coords, hits) {
        validateCoordIsOnBoard(coords);
        validateNonRepeatAttack(coords, hits);
    };

    function validateNonRepeatAttack(coords, hits) {
        // Super silly workaround since this doesn't work normally with nested arrays
        if (JSON.stringify(hits).includes(JSON.stringify(coords))) {throw new IllegalAttack("Illegal Attack: You have already selected that move")}
    }
    
    
    function validateCoordIsOnBoard(coord) {
        if (coord[0] < 0 || coord[0] > 9
            || coord[1] < 0 || coord[1] > 9) {
                throw new IllegalAttack("Illegal Attack: Moves must be between spaces 1 and 10")
            }
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
        hits: [],
        receiveAttack (coords) { // Returns a boolean t/f for if the space hits a ship
            checkForLegalAttack(coords, this.hits);
            this.hits.push(coords)
            if (this.board[coords[0]][coords[1]]) return true;
            return false;
        },
    }

    return gameboard
};

export default GameboardFactory;