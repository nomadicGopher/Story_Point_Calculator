"use strict";

const form = document.forms[0],
  complexity = form.elements["complexity"],
  time = form.elements["time"],
  fibonacci = form.elements['fibonacci'];

function calculate() {
  const value = time.value * complexity.value;

  const displayResult = (result) => {
    document.getElementById("result").innerHTML = result;
    document.getElementById("plural").innerHTML = (result !== 1 ? "s" : "");
  };

  if (fibonacci.checked) {
    const fibonacciNumbers = [1, 2, 3, 5, 8, 13, 21];

    const roundToClosestFibonacci = (num) => {
      return fibonacciNumbers.reduce((closest, current) => {
        return (Math.abs(current - num) < Math.abs(closest - num)) ? current : closest;
      }, fibonacciNumbers[0]);
    };

    const roundedValue = roundToClosestFibonacci(value);
    
    displayResult(roundedValue);
  } else {
    displayResult(value);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  form.addEventListener("change", calculate, false);
  calculate();
});