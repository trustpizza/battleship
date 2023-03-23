import {currentShip} from "../game-logic/place-ships-board"

function clearNav(nav) {
    while (nav.firstChild) {
        nav.removeChild(nav.firstChild)
    }
}

function updateNav(nav, ships) {
    clearNav(nav);

    for (const ship of ships) {
        // create button for ship
        const shipButton = document.createElement('button');
        shipButton.className = 
            "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        shipButton.textContent = ship.length;
        nav.appendChild(shipButton);

        shipButton.addEventListener('click', () => {
            currentShip.set(ship);
        })
    }   
}

const ShipNavFactory = (ships) => {
    const nav = document.createElement('nav');
    nav.className =
        "flex w-full h-10 border-2 rounded-md justify-between";
    
    const update = (ships) => {
        updateNav(nav, ships);
    }

    update(ships);

    return {nav, update};
};

export default ShipNavFactory;