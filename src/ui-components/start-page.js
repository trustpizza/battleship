import NewPlayerForm from "./new-player-form";
/*
Plan:
Create a start-page.  The start page will have a form that requires validation to create 2 plays
Once the two players are created it will start by showing P1s board
Once P1 is done, it will show P2's board
Start from here
*/

const startForm = document.createElement("form");

const p1Fieldset = NewPlayerForm();
const p2Fieldset = NewPlayerForm();

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.value = "submit";

startForm.append(p1Fieldset, p2Fieldset, submitButton);
export default startForm;