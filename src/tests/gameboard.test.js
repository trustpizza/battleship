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

test("Place a ship in different horizontal coords", () => {
    const ship = ShipFactory(5);
    const gameboard = new GameboardFactory();
    gameboard.placeShip(ship, [0,4], true);    
    expect(gameboard.board).toEqual([
        [null,null,null,null,ship,ship,ship,ship,ship,null],
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

test("Place a ship at a different coordinate vertically", () => {
    const ship = ShipFactory(4);
    const gameboard = GameboardFactory();
    gameboard.placeShip(ship, [0,3], false);

    expect(gameboard.board).toEqual([
        [null,null,null,ship,null,null,null,null,null,null],
        [null,null,null,ship,null,null,null,null,null,null],
        [null,null,null,ship,null,null,null,null,null,null],
        [null,null,null,ship,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
    ])
});

test("Mix of horizontal and vertical coordinates", () => {
    const ship1 = ShipFactory(5);
    const ship2 = ShipFactory(4);
    const gameboard = GameboardFactory();
    gameboard.placeShip(ship1, [2,3], false);
    gameboard.placeShip(ship2, [8,4], true);

    expect(gameboard.board).toEqual([
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,ship1,null,null,null,null,null,null],
        [null,null,null,ship1,null,null,null,null,null,null],
        [null,null,null,ship1,null,null,null,null,null,null],
        [null,null,null,ship1,null,null,null,null,null,null],
        [null,null,null,ship1,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null,null,null],
        [null,null,null,null,ship2,ship2,ship2,ship2,null,null],
        [null,null,null,null,null,null,null,null,null,null],
    ])
})

test("Don't allow for illegal horizontal moves", () => {
    const ship = ShipFactory(5);
    const gameboard = GameboardFactory();
    function errorPlacement() {
        gameboard.placeShip(ship, [0,6], true)
    }
    // gameboard.placeShip(ship, [6,0], true);

    expect(errorPlacement).toThrow();
});

test("Don't allow double placement, this throws an error", () => {
    const ship1 = ShipFactory(5);
    const ship2 = ShipFactory(4);
    const gameboard = GameboardFactory()
    gameboard.placeShip(ship1, [0,0], true);

    function illegalShipPlacement() {
        gameboard.placeShip(ship2, [0,4], true) 
    }
 
    expect(illegalShipPlacement).toThrow();
});

test("Don't allow for vertical moves that place a ship off of the board", () => {
    const ship = ShipFactory(5);
    const gameboard = GameboardFactory();
    function errorPlacement() {
        gameboard.placeShip(ship, [0,7], false)
    };

    expect(errorPlacement).toThrow()
})

test("Attacking an empty spot returns False", () => {
    const gameboard = GameboardFactory();
    
    expect(gameboard.attack([0,0])).toBe(false);
})

test("Attacks must be made with valid values", () => {
    const gameboard = GameboardFactory();
    function badAttack() {
        gameboard.attack([10,10]);
    }

    expect(badAttack).toThrow();
});

test("Attacking an enemy spot that is NOT empty returns TRUE", () => {
    const gameboard = GameboardFactory();
    const ship = ShipFactory(5);
    gameboard.placeShip(ship, [0,0], true)
    
    expect(gameboard.attack([0,2])).toBe(true)
});

test("You are able to return a list of hits that updates", () => {
    const gameboard = GameboardFactory();
    const ship = ShipFactory(5);
    gameboard.placeShip(ship, [0,0], true);

    expect(gameboard.hits).toBe([]);
    gameboard.attack([0,2]);
    expect(gameboard.hits).toBe([[0,2]])
})