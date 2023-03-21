class IllegalCoordinates extends Error {
    constructor(message) {
        super(message);
        this.name = "IllegalCoordinates";
    }
}

class MultipleBoardsError extends Error {
    constructor(message) {
        super(message);
        this.name = "MultipleBoards"
    }
};

function validateCoords(coords) {
    if (coords[0] < 0 ||
        coords[0] > 9 ||
        coords[1] < 0 ||
        coords[1] > 9) {
            throw new IllegalCoordinates("Coordinates must be between 0 and 9")
        }
}

export default function PlayerFactory(name) {
    let setBoardExecuted = false;

    const player = {
        name,
        takeTurn (coords) {
            validateCoords(coords)
            return coords;
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
        }
    }

    return player;
}