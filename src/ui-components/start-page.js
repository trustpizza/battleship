import startForm from './new-player-form';
import PlayerFactory from "../components/player";
import {PlayerBoardBuilder} from '../game-logic/place-ships-board';
// Eventually move this since there should be NO game logic here

const startPage = document.createElement('div');
startPage.className = 
    "h-screen flex items-center justify-center"
startPage.appendChild(startForm);
// const p1 = PlayerFactory("Axel");
// const player1Board = PlayerBoardBuilder(p1);
// startPage.append(player1Board);

startForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(startForm);

    const p1 = PlayerFactory(formData.get("Player 1"));
    const p2 = PlayerFactory(formData.get("Player 2"));
    // Load Page
    startPage.removeChild(startForm);
    const player1Board = PlayerBoardBuilder(p1);

    // do {
    // } while (!p1.hasBoard());
    const player2Board = PlayerBoardBuilder(p2);

    // ONce player 1 board is built, THEN build player 2 board...but how
    startPage.append(player1Board)
});


// const startBuildingBoardForm 


export default startPage;