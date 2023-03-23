import startForm from './new-player-form';
import PlayerFactory from "../components/player";

startForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(startForm);

    const p1 = PlayerFactory(formData.get("Player 1"));
    const p2 = PlayerFactory(formData.get("Player 2"));
    // Load Page
});

const startPage = document.createElement('div');

startPage.appendChild(startForm);

export default startPage;