export function createButtons (nameId, text) {
    const button = document.createElement("button");
    button.className = "button";
    button.id = nameId;
    button.textContent = text;

    const containerButton = document.querySelector(".container-buttons");

    containerButton.appendChild(button);
}