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

    test("Player can take turn", () => {
        expect(p1.takeTurn([0,0], p2Board)).toBe(false);
    });

    test("Player cannot take same turn twice", () => {
        function repeatAttack() {
            p1.takeTurn([0,0], p2Board)
        }
        expect(repeatAttack).toThrow();
    });

    test("Player cannot attack their own board", () => {
        function selfAttack() {
            p1.takeTurn([0,0], p1Board)
        };

        expect(selfAttack).toThrow();
    })

    test("Player returns boolean on hasBoard", () => {
        expect(p1.hasBoard()).toBe(true);
    })

    test("Player cannot have a second board added", () => {
        function secondBoard() {
            p1.setBoard(p1Board)
        };
        expect(secondBoard).toThrow();
    })
})