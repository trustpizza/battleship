export default function GameboardFactory() {
    const gameboard = {
        board: new Array(10).fill(new Array(10).fill(null)),
        placeShip(ship, start, end) {
            // Between this.board[start] and this.board[end] needs to be ship
            for (let i = 1; i < ship.length; i++) {
                
            }
        },
    };


    return gameboard
}