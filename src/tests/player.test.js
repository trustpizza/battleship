import PlayerFactory from "../components/player";
import GameboardFactory from "../components/gameboard"

describe("Basic player stats", () => {
    const p1Board = GameboardFactory();
    const p1 = PlayerFactory("Axel", p1Board);

    test("Player has a name", () => {
        expect(p1.name).toBe("Axel")
    });

    test("Player can take turn", () => {
        expect(p1.takeTurn([0,0])).toBe(false);
    });

    test("Player cannot take same turn twice", () => {
        function repeatAttack() {
            p1.takeTurn([0,0])
        }
        expect(repeatAttack).toThrow();
    })
})