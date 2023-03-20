import BattleshipFactory from "../components/game";
import PlayerFactory from "../components/player"

describe("Game Setup", () => {
    const p1 = PlayerFactory();
    const p2 = PlayerFactory();
    const game = BattleshipFactory(p1, p2);


    test("Game has players object", () => {
        expect(game.players).toBeTruthy()
    });

    test("game.players.p1 is p1", () => {
        expect(game.players.p1).toBe(p1)
    });

    test("game.players.p2 is p2", () => {
        expect(game.players.p2).toBe(p2);
    })
})