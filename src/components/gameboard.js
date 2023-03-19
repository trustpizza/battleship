export default function GameboardFactory() {
    const gameboard = {
        board: new Array(10).fill(new Array(10).fill(null)),
        placeShip(ship, start, end) {
            if (start[0] === end[0]) { // Ship is horizontal
                const row = start[0]
        
                for (let i = 0; i < ship.length; i++) {
                    this.board[row][i] = ship
                }
            } else if (start[1] === end[1]) { // Ship is vertical
                const col = start[1];
        
                for (let i = 0; i < ship.length; i++) {
                    this.board[i][col] = ship
                }   
            } else {
                return new Error("Ships must be either veritically or horizontally placed")
            }
        },
    };

    // Object.assign(gameboard.prototype)

    return gameboard
};

