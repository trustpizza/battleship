class SelfAttackError extends Error {
    constructor(message) {
        super(message);
        this.name = "SelfAttack";
    }
}

export default function BattleshipFactory(p1, p2) {
    const currentPlayer = p1;

    const gameover = false;

    function switchPlayer(game) {
        game.currentPlayer = (game.currentPlayer == p1 ? p2: p1);
    }

    const game = {
        players: {p1, p2},
        currentPlayer,
        playRound (selection) {
            switchPlayer(this)
        }
    };

    return game;
}

// Game's sshould be able to play a game.  The play game function should 