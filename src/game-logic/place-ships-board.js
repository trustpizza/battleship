import GameBoard from '../ui-components/gameboard';
import ShipFactory from "../components/ship";
import GameboardFactory from '../components/gameboard';
import ShipSidebarFactory from '../ui-components/ships-sidebar';

const PlayerBoardBuilder = (player) => {
    const container = document.createElement('div');
    container.className = 
        "flex";

    const boardUI = GameBoard();

    const shipLengths = [2,3,3,4,5];
    const ships = []

    for (let i = 0; i < shipLengths.length; i++) {            
        const ship = ShipFactory(shipLengths[i]);
        ships.push(ship);
    }

    const sidebar = ShipSidebarFactory(ships);

    const playerGameboard = GameboardFactory();

    container.append(sidebar, boardUI);
    return container;
}

export default PlayerBoardBuilder;