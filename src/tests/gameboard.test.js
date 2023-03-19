import GameboardFactory from "../components/gameboard";
import ShipFactory from "../components/ship"

test("Gameboard has a board: 1- arrays of 10 arrays of 10 nulls", () => {
    const gameboard = GameboardFactory();

    expect(gameboard.board).toEqual([
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
    ])
})

test("Place a ship at a specific coordinate horizontally", () => {
    const ship = ShipFactory(5);
    const gameboard = new GameboardFactory();
    gameboard.placeShip(ship, [0,0], true);    

    expect(gameboard.board).toEqual([
        [ship,ship,ship,ship,ship,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
    ])
});

test("Place a ship at a specific coordinate vertically", () => {
    const ship = ShipFactory(4);
    const gameboard = GameboardFactory();
    gameboard.placeShip(ship, [0,0], false);

    expect(gameboard.board).toEqual([
        [ship,null,null,null,null,null,null,null,null,null],
        [ship,null,null,null,null,null,null,null,null,null],
        [ship,null,null,null,null,null,null,null,null,null],
        [ship,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
    ])
});

test("Don't allow for illegal horizontal moves", () => {
    const ship = ShipFactory(5);
    const gameboard = GameboardFactory();
    function errorPlacement() {
        gameboard.placeShip(ship, [0,6], true)
    }
    // gameboard.placeShip(ship, [6,0], true);

    expect(errorPlacement).toThrow();
});

test.skip("Don't allow double placement, this throws an error", () => {
    const ship1 = ShipFactory(5);
    const ship2 = ShipFactory(4);
    const gameboard = GameboardFactory()
    gameboard.placeShip(ship1, [0,0], true);

    function illegalShipPlacement() {
        gameboard.placeShip(ship2, [0,4], false) 
    }

    expect(illegalShipPlacement).toThrow();
});

test.skip("Don't allow for vertical moves that place a ship off of the board", () => {
    const ship = ShipFactory(5);
    const gameboard = GameboardFactory();
    function errorPlacement() {
        gameboard.placeShip(ship, [0,7], false)
    };

    expect(errorPlacement).toThrow()
})