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
    },
    reset () {
        this.ship = null;
    }
};

function getCellLocation(cell) {
    const location = [];
    const cellLocationAsArray = cell.getAttribute("location").split("")
    cellLocationAsArray.splice(1,1);

    for (let i = 0; i < cellLocationAsArray.length; i++) {
        location.push(parseInt(cellLocationAsArray[i]))                
    }
    // console.log(location)
    return location;
}

function removeShips(ships) {
    const locationOfCurrentShip = ships.indexOf(currentShip.get());
    ships.splice(locationOfCurrentShip, 1);
    console.log(ships);
}

function placeShipsOnBoard(boardUI, gameboard, ships, nav) {
    let shipsEmpty = true;
    do {
        boardUI.board.addEventListener('click', (e) => {
            if (e.target.parentElement == boardUI.board) {
                const cellLocation = getCellLocation(e.target);
                if (currentShip.get()) {
                    gameboard.placeShip(currentShip.get(), cellLocation, true);
                    removeShips(ships);
                    currentShip.reset();
                    boardUI.updateUI();
                    if (ships.length == 0) {
                        shipsEmpty = true;
                        return false;
                    }
                    // Remove current ship button
                }
            }
        })
    } while (!shipsEmpty)
};

const PlayerBoardBuilder = (player) => {
    const container = document.createElement('div');
    container.className = 
        "flex flex-col gap-10";

    const boardUI = GameBoard();
    const playerGameboard = GameboardFactory();

    const shipLengths = [2,3,3,4,5];
    const ships = []

    for (let i = 0; i < shipLengths.length; i++) {            
        const ship = ShipFactory(shipLengths[i]);
        ships.push(ship);
    };

    const nav = ShipNavFactory(ships).nav;

    /*
    Plan:
        Set the current ship
        Once current ship is set, check if the player is clicking on the gameboard
        If the player is clicking on the gameboard, get the location of 
    */

    placeShipsOnBoard(boardUI, playerGameboard, ships, nav);

    container.append(boardUI.board, nav);
    return container;
}

export {PlayerBoardBuilder, currentShip};