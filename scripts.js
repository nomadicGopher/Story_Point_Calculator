"use strict";

const form = document.forms[0],
  complexity = form.elements["complexity"],
  time = form.elements["time"],
  fibonacci = form.elements['fibonacci'];

function calculate() {
  const result = time.value * complexity.value;

  const displayResult = (result) => {
    document.getElementById("result").innerHTML = result;
    document.getElementById("plural").innerHTML = (result !== 1 ? "s" : "");
  };

  if (fibonacci.checked) {
    const fibonacciNumbers = [1, 2, 3, 5, 8, 13, 21];

    const roundToClosestFibonacci = (localValue) => {
      return fibonacciNumbers.reduce((closest, current) => {
        // Determine if the current Fibonacci number is closer to the input number than the closest found so far
        return (Math.abs(current - localValue) < (Math.abs(closest - localValue)) ? current : closest);
      }, fibonacciNumbers[0]);
    };

    const roundedResult = roundToClosestFibonacci(result);
    
    displayResult(roundedResult);
  } else {
    displayResult(result);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  form.addEventListener("change", calculate, false);
  calculate();
});