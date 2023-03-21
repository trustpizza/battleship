class SelfAttackError extends Error {
    constructor(message) {
        super(message);
        this.name = "SelfAttack";
    }
}

export default function BattleshipFactory(p1, p2) {
    let currentPlayer = p1;

    let gameover = false;

    const game = {
        players: {p1, p2},
        currentPlayer,
        switchPlayer () {
            this.currentPlayer = (this.currentPlayer == p1 ? p2 : p1)
        },
    };

    return game;
}
