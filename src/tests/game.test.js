import BattleshipFactory from "../components/game";

describe("Game Setup", () => {
    test("Game has players object", () => {
        const game = BattleshipFactory();
        expect(game.players).toBeTruthy()
    })
})