export default function GameboardFactory() {
    const gameboard = {
        board: new Array(10).fill(new Array(10).fill(null))
    };

    return gameboard
}