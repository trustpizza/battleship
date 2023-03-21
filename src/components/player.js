class SelfAttack extends Error {
    constructor(message) {
        super(message);
        this.name = "SelfAttack";
    }
}

export default function PlayerFactory(name) {
    function validateAttack(boardBeingAttacked, playersBoard) {
        if (boardBeingAttacked === playersBoard) {
            throw new SelfAttack("You cannot attack your own board");
        }
    }

    const player = {
        name,
        takeTurn (coords, board) {
            validateAttack(board, this.board)
            return board.receiveAttack(coords);
        },
        setBoard (board) {
            this.board = board;
        }
    }

    return player;
}