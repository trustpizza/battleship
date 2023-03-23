export default function NewPlayerForm() {
    const fieldset = document.createElement("fieldset");
    fieldset.className = 
        "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"

    const nameFieldDiv = FormFieldCreator("name", "text");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.value = "submit";

    fieldset.appendChild(nameFieldDiv);

    return fieldset;
}

function FormFieldCreator(name, type) {
    const formFieldSection = document.createElement('div');
    
    const formFieldLabel = document.createElement('label');
    formFieldLabel.setAttribute("for", name);
    formFieldLabel.className = 
        "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"

    const formFieldInput = document.createElement('input');
    formFieldInput.name = name;
    formFieldInput.type = type;
    formFieldInput.className =
        "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

    formFieldSection.append(formFieldLabel, formFieldInput);

    return formFieldSection;
}