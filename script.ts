"use strict";

const form = document.forms[0] as HTMLFormElement;
const complexity = form.elements["complexity"] as HTMLSelectElement;
const time = form.elements["time"] as HTMLSelectElement;
let value: number;

function calculate(): void {
    value = Number(time.value) * Number(complexity.value);
    const pluralElement = document.getElementById("plural") as HTMLElement;
    const valueElement = document.getElementById("value") as HTMLElement;

    if (value !== 1) {
        pluralElement.innerHTML = "s";
    } else {
        pluralElement.innerHTML = "";
    }
    valueElement.innerHTML = value.toString();
}

// Add event listeners
if (complexity instanceof HTMLSelectElement) {
    complexity.addEventListener("change", calculate, false);
}
if (time instanceof HTMLSelectElement) {
    time.addEventListener("change", calculate, false);
}

calculate();
