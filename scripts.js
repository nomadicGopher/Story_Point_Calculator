"use strict";

let form = document.forms[0],
  complexity = form.elements["complexity"],
  time = form.elements["time"],
  value;

function calculate() {
  value = time.value * complexity.value;
  if (value !== 1) {
    document.getElementById("plural").innerHTML = "s";
  } else {
    document.getElementById("plural").innerHTML = ""
  };
  document.getElementById("value").innerHTML = value;
};

for(let i = 0; i < complexity.length; i++) {
  complexity[i].addEventListener("change", calculate, false);
};
for(let i = 0; i < time.length; i++) {
  time[i].addEventListener("change", calculate, false);
};

calculate();