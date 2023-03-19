export default function GameboardFactory() {
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

    const gameboard = {
        board: buildBoard(),
        placeShip(ship, coords, horizontal = true) {
            if (horizontal) {
                for (let i = coords[1]; i < ship.length; i++) {
                    this.board[coords[0]][i] = ship             
                }
            } else if (!horizontal) {

            } else {
                throw new Error("Ships must be either veritically or horizontally placed")
            }
        },
    };

    // Object.assign(gameboard.prototype)

    return gameboard
};

