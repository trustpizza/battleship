export default function NewPlayerForm() {
    const fieldset = document.createElement("fieldset");

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

    const formFieldInput = document.createElement('input');
    formFieldInput.name = name;
    formFieldInput.type = type;

    formFieldSection.append(formFieldLabel, formFieldInput);

    return formFieldSection;
}