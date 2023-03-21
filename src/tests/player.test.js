import PlayerFactory from "../components/player";
import GameboardFactory from "../components/gameboard"

describe("Player Tests", () => {
    const p1Board = GameboardFactory();
    const p2Board = GameboardFactory();
    const p1 = PlayerFactory("Axel");
    p1.setBoard(p1Board);

    test("Player has a name", () => {
        expect(p1.name).toBe("Axel")
    });

    test("Player has a board", () => {
        expect(p1.board).toBe(p1Board);
    })
    
    test("Player cannot have a second board added", () => {
        function secondBoard() {
            p1.setBoard(p1Board)
        };

        expect(secondBoard).toThrow();
    })
})