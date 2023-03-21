class MultipleBoardsError extends Error {
    constructor(message) {
        super(message);
        this.name = "MultipleBoards"
    }
};

export default function PlayerFactory(name) {
    let setBoardExecuted = false;

    const player = {
        name,
        setBoard (board) {
            (() => {
                if (!setBoardExecuted) {
                    setBoardExecuted = true;
                    this.board = board;
                } else {
                    throw new MultipleBoardsError("You can only have one board");
                }
            })()
        }
    }

    return player;
}