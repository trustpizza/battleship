export default function PlayerFactory(name, gameboard) {
    const player = {
        name,
        takeTurn (coords) {
            return gameboard.receiveAttack(coords);
        },
    }

    return player;
}