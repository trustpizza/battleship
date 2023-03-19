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
        /*
            If empty {

            } if off- horizontally {

            } if off-vertically

        */
        validateMoveIsOnBoard(ship, coords);
               
        // throw new IllegalMove("Illegal move: The ship must be entirely on the board");
    }

    function validateMoveIsOnBoard(ship, coords) {
        if (
            coords[0]+ship.length > 9 ||
            coords[1]+ship.length > 9
        ) {
            throw new IllegalMove("Illegal Move: The ship must be entirely on the board")
        }
    }

    function validateOverlap(coords, ships) {

    }
    
    const gameboard = {
        board: buildBoard(),
        placeShip (ship, coords, horizontal = true) {
            checkForLegalMove(ship, coords, horizontal, this.board)

            if (horizontal) {
                for (let i = coords[1]; i < ship.length; i++) {
                    this.board[coords[0]][i] = ship             
                }
            } else if (!horizontal) {
                for (let i = coords[0]; i < ship.length; i++) {
                    this.board[i][coords[1]] = ship
                }
            } 
        },
    }

    return gameboard
};

export default GameboardFactory;