function NewPlayerForm(player) {
    const fieldset = document.createElement("fieldset");
    fieldset.name = "newPlayerForm"
    fieldset.className = 
        "md:flex md:items-center mb-6";

    const nameFieldDiv = FormFieldCreator(player, "text", "Name");

    // const submitButton = document.createElement("button");
    // submitButton.type = "submit";
    // submitButton.value = "submit";

    fieldset.appendChild(nameFieldDiv);

    return fieldset;
}

function FormFieldCreator(name, type, placeholder) {
    const formFieldSection = document.createElement('div');
    formFieldSection.className = 
        "md:flex md:items-center mb-6"
    
    const labelDiv = document.createElement('div');
    labelDiv.className = "md:w-1/3";

    const formFieldLabel = document.createElement('label');
    formFieldLabel.setAttribute("for", name);
    formFieldLabel.textContent = name;
    formFieldLabel.className = 
        "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"

    labelDiv.appendChild(formFieldLabel);
    
    const inputDiv = document.createElement('div');
    inputDiv.className = "md:w-2/3"

    const formFieldInput = document.createElement('input');
    formFieldInput.name = name;
    formFieldInput.required = true;
    formFieldInput.type = type;
    formFieldInput.placeholder = placeholder
    formFieldInput.className =
        "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"

    inputDiv.appendChild(formFieldInput);

    formFieldSection.append(labelDiv, inputDiv);

    return formFieldSection;
};

const startForm = document.createElement("form");
startForm.className = "w-full max-w-sm flex flex-col"

const p1Fieldset = NewPlayerForm("Player 1", "p1");
const p2Fieldset = NewPlayerForm("Player 2", "P2");

const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";
submitButton.textContent = "Start Game"; 
submitButton.className = 
    "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"

startForm.append(p1Fieldset, p2Fieldset, submitButton);
export default startForm;