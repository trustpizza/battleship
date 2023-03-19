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
    const gameboard = GameboardFactory();
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
})