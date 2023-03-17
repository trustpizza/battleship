import ShipFactory from "../components/ship"

describe("Creating a new ship", () => {
    const ship = ShipFactory(5)

    test("Ship returns an object that has a length", () => {
        expect(ship.length).toBe(5);
    });

    test("Ships begin with 0 hits", () => {
        expect(ship.hits).toBe(0);
    });

    test("Ships are not sunk to begin", () => {
        expect(ship.isSunk()).toBe(false);
    });
})

describe("Ships can be hit and sunk", () => {
    test("When a ship is hit, it's hits increase", () => {
        const ship = ShipFactory(5);
        ship.hit();

        expect(ship.hits).toBe(1);
    })

    test("When a ship is hit 5 times, it sinks", () => {
        const ship = ShipFactory(5);
        for (let i = 0; i < 5; i++) {
            ship.hit();
        }

        expect(ship.isSunk()).toBe(true)
    })
})

