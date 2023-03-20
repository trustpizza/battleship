export default function PlayerFactory(name, gameboard) {
    const board = gameboard;

    const player = {
        name,
        takeTurn (coords) {
            return board.receiveAttack(coords);
        },
    }

    return player;
}