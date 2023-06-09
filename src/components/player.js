class SelfAttackError extends Error {
    constructor(message) {
        super(message);
        this.name = "SelfAttack";
    }
}

class MultipleBoardsError extends Error {
    constructor(message) {
        super(message);
        this.name = "MultipleBoards"
    }
}

function validateAttack(boardBeingAttacked, playersBoard) {
    if (boardBeingAttacked === playersBoard) {
        throw new SelfAttackError("You cannot attack your own board");
    };
};

export default function PlayerFactory(name) {
    let setBoardExecuted = false;

    const player = {
        name,
        takeTurn (coords, board) {
            validateAttack(board, this.board)
            return board.receiveAttack(coords);
        },
        setBoard (board) {
            (() => {
                if (!setBoardExecuted) {
                    setBoardExecuted = true;
                    this.board = board;
                } else {
                    throw new MultipleBoardsError("You can only have one board");
                }
            })()
        },
        hasBoard:  () => {
            return setBoardExecuted;
        }
    }

    return player;
}