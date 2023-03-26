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
    return location;
}

function removeShips(ships) {
    const locationOfCurrentShip = ships.indexOf(currentShip.get());
    ships.splice(locationOfCurrentShip, 1);
}

function placeShipsOnBoard(boardUI, gameboard, ships, nav) {
    let shipsEmpty = true;
    let horizontal = true;
    do {
        boardUI.board.addEventListener("mouseover", (e) => {
            if (e.target.parentElement == boardUI.board) {
                const currentCell = e.target
                if (currentShip.get()) {
                    boardUI.showShipOnHover(currentShip.get(), currentCell, gameboard, horizontal);
                }
                boardUI.board.addEventListener('click', (e) => {
                    const cellLocation = getCellLocation(e.target);

                    if (currentShip.get()) {
                        gameboard.placeShip(currentShip.get(), cellLocation, horizontal);
                        removeShips(ships);
                        currentShip.reset();
                        boardUI.updateUI(gameboard);
                        nav.update(ships);
                        if (ships.length == 0) {
                            shipsEmpty = true;
                            return false;
                        }
                    }
                })
            }
            boardUI.updateUI(gameboard)
        })

        window.addEventListener("keydown", (e) => {
            if (e.key === "r") {
                horizontal = (horizontal === true ? false : true);
                console.log(horizontal)
            }
        })
    } while (!ships.length)
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

    const nav = ShipNavFactory(ships);
    nav.update(ships)

    placeShipsOnBoard(boardUI, playerGameboard, ships, nav);

    container.append(boardUI.board, nav.nav);
    return container;
}

export {PlayerBoardBuilder, currentShip };