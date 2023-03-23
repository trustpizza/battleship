import startForm from './new-player-form';
import PlayerFactory from "../components/player";
import board from './board';
// Eventually move this since there should be NO game logic here

const startPage = document.createElement('div');
//startPage.appendChild(startForm);
startPage.append(board);

startForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(startForm);

    const p1 = PlayerFactory(formData.get("Player 1"));
    const p2 = PlayerFactory(formData.get("Player 2"));
    // Load Page
    //startPage.removeChild(startForm)
});


// const startBuildingBoardForm 


export default startPage;