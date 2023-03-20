import PlayerFactory from "../components/player";
import GameboardFactory from "../components/gameboard"

describe("Basic player stats", () => {
    const p1 = PlayerFactory("Axel");
    const p1Board = GameboardFactory()

    test("Player has a name", () => {
        expect(p1.name).toBe("Axel")
    });

    test.skip("Player can take turn", () => {
        expect(p1.takeTurn([0,0])).not.toThrow()
    });

    test.skip("Player has a gameboard", () => {
        expect(p1.gameboard).toBe(p1Board);
    });

    test.skip("Player cannot take same turn twice", () => {
        expect(p1.takeTurn([0,0])).toThrow();
    })
})