export default function NewPlayerForm() {
    const form = document.createElement("form");

    const nameFieldDiv = FormFieldCreator("name", "text");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.value = "submit";

    form.appendChild(nameFieldDiv);

    return form;
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