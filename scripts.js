"use strict";

const form = document.forms[0],
  complexity = form.elements["complexity"],
  time = form.elements["time"],
  fibonacci = form.elements['fibonacci'];

function calculate() {
  let value = time.value * complexity.value;

  if (fibonacci) {
    (function() {
      // Round value to the closes fibonacci value (ie. 1, 2, 4, 8, 16).
    })();
  }

  document.getElementById("plural").innerHTML = (value !== 1 ? "s" : "");

  document.getElementById("result").innerHTML = value;
};

document.addEventListener('DOMContentLoaded', function() {
  form.addEventListener("change", calculate, false);
  
  calculate();
});