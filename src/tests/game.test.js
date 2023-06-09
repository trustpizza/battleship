import BattleshipFactory from "../components/game";
import PlayerFactory from "../components/player";
import GameboardFactory from "../components/gameboard";

describe("Game Setup", () => {
    const p1 = PlayerFactory();
    const p2 = PlayerFactory();
    const game = BattleshipFactory(p1, p2);

    describe("Pre-Board Setup", () => {
        test("Game has players object", () => {
            expect(game.players).toBeTruthy()
        });
    
        test("game.players.p1 is p1", () => {
            expect(game.players.p1).toBe(p1)
        });
    
        test("game.players.p2 is p2", () => {
            expect(game.players.p2).toBe(p2);
        });
    })

    describe("Adding Boards to each Player", () => {
        const p1Board = GameboardFactory(); 
        const p2Board = GameboardFactory();
        p1.setBoard(p1Board);
        p2.setBoard(p2Board);
        
        test("Current player is player1", () => {
            expect(game.currentPlayer).toBe(p1);
        });

        test("Current player switches to player2", () => {
            game.playRound();
            expect(game.currentPlayer).toBe(p2);
        });
    });

    describe("Attacking enemy boards", () => {
        beforeEach(() => {
            const p1Board = GameboardFactory(); 
            const p2Board = GameboardFactory();
            p1.setBoard(p1Board);
            p2.setBoard(p2Board);

            const shipLengths = [2,3,3,4,5];

            for (let i = 0; i < shipLengths.length; i++) {            
                for (const board of [p1Board, p2Board]) {
                    const ship = ShipFactory(shipLengths[i]);
                    board.placeShip(ship, [i,0], true)
                }                
            }
        })

        test.skip("True is True", () => {
            expect(true).toBe(true);
        })
        // test("P1 attacks P2")
    })
})