import GameBoard from '../ui-components/gameboard';
import ShipFactory from "../components/ship";
import GameboardFactory from '../components/gameboard';
import ShipNavFactory from '../ui-components/ships-nav';

const currentShip = {
    set (ship) {
        this.ship = ship;
    },
    get () {
        return this.ship;
    }
};

const PlayerBoardBuilder = (player) => {
    const container = document.createElement('div');
    container.className = 
        "flex flex-col gap-10";

    const boardUI = GameBoard();

    const shipLengths = [2,3,3,4,5];
    const ships = []

    for (let i = 0; i < shipLengths.length; i++) {            
        const ship = ShipFactory(shipLengths[i]);
        ships.push(ship);
    }

    const nav = ShipNavFactory(ships).nav;

    const playerGameboard = GameboardFactory();

    container.append(boardUI, nav);
    return container;
}

export {PlayerBoardBuilder, currentShip};