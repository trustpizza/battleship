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

    function checkForLegalMove(ship, coords, direction) {
        /*
            If empty {

            } if off- horizontally {

            } if off-vertically

        */
        throw new IllegalMove("Illegal move: The ship must be entirely on the board");
    }
    
    const gameboard = {
        board: buildBoard(),
        placeShip (ship, coords, horizontal = true) {
            checkForLegalMove(ship, coords, horizontal)

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