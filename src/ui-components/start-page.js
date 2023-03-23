import NewPlayerForm from "./new-player-form";
/*
Plan:
Create a start-page.  The start page will have a form that requires validation to create 2 plays
Once the two players are created it will start by showing P1s board
Once P1 is done, it will show P2's board
Start from here
*/

const startForm = document.createElement("form");
startForm.className = "w-full max-w-sm flex flex-col"

const p1Fieldset = NewPlayerForm("Player 1");
const p2Fieldset = NewPlayerForm("Player 2");

const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";
submitButton.textContent = "Start Game"; 
submitButton.className = 
    "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"

startForm.addEventListener("submit", (e) => {
    e.preventDefault()
})

console.log(startForm)


startForm.append(p1Fieldset, p2Fieldset, submitButton);
export default startForm;