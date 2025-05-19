"use strict";

let form = document.forms[0],
  complexity = form.elements["complexity"],
  time = form.elements["time"],
  fibonacci = form.elements['fibonacci'],
  value;

function calculate() {
  value = time.value * complexity.value;

  if (value !== 1) {
    document.getElementById("plural").innerHTML = "s";
  } else {
    document.getElementById("plural").innerHTML = ""
  };

  document.getElementById("result").innerHTML = value;
};

form.addEventListener("change", calculate, false)

calculate();