class IllegalMove extends Error {
    constructor(message) {
        super(message)
        this.name = "IllegalMove";
    }
}

class IllegalAttack extends Error {
    constructor(message) {
        super(message);
        this.name = "IllegalAttack";
    }
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
        // THe -1 found in both of these are due to the fact that when placing a ship we do not count the start point.  For example, if a ship is 2 units long and placed on square [8,8], it will take up [8,8] and [8,9], however if we only added the ship length to its starting position this would give 8+2=10, and would then throw. 
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
    };
    
    function validateCoordIsOnBoard(coord) {
        if (coord[0] < 0 || coord[0] > 9
            || coord[1] < 0 || coord[1] > 9) {
                throw new IllegalAttack("Illegal Attack: Moves must be between spaces 1 and 10")
            }
    };

    const ships = []

    function verifyAllShipsSunk() {
        if (ships.length === 0) { return false; } 
        else if (ships.every((ship) =>
            ship.isSunk()
        )) { return true }
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
            ships.push(ship)
        },
        hits: [],
        receiveAttack (coords) { // Returns a boolean t/f for if the space hits a ship
            checkForLegalAttack(coords, this.hits);
            this.hits.push(coords)
            if (this.board[coords[0]][coords[1]]) { 
                this.board[coords[0]][coords[1]].hit()
                return true 
            };
            return false;
        },
        allSunk: verifyAllShipsSunk()
    }

    return gameboard
};

export default GameboardFactory;