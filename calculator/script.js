function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function appendNumber(e) {
  let number = e.target.textContent;
  currNumber += number;
}

function getOperator(e) {
  if (operator !== "") {
    calculate();
  }

  operator = e.target.textContent;
  prevNumber = currNumber;
  currNumber = "";
}

function calculate() {
  prevNumber = parseFloat(prevNumber);
  currNumber = parseFloat(currNumber);

  switch (operator) {
    case "+":
      currNumber = sum(prevNumber, currNumber);
      break;
    case "-":
      currNumber = subtract(prevNumber, currNumber);
      break;
    case "*":
      currNumber = multiply(prevNumber, currNumber);
      break;
    case "/":
      currNumber = divide(prevNumber, currNumber);
      break;
    default:
      return;
  }
  prevNumber = "";
  operator = "";
}

function clearAll() {
  prevNumber = "";
  currNumber = "";
  operator = "";
}

function updateDisplay() {
  display.textContent = currNumber;
}

//*************** main **************//
const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operators");
const clearButton = document.querySelector("#clear");
const display = document.querySelector("#display");
const equals = document.querySelector("#equal");

let prevNumber = "";
let currNumber = "";
let operator = "";

function runCalculator() {
  // add events to number
  numberButtons.forEach((number) =>
    number.addEventListener("click", (e) => {
      appendNumber(e);
      updateDisplay();
    })
  );

  // add events to operator
  operatorButtons.forEach((operator) =>
    operator.addEventListener("click", (e) => {
      getOperator(e);
      updateDisplay();
    })
  );

  // calculate functions
  equals.addEventListener("click", () => {
    calculate();
    updateDisplay();

    console.log(`currNumber = ${currNumber}`);
    console.log(`Display textContent = ${display.textContent}`);
  });

  clearButton.addEventListener("click", () => {
    clearAll();
    updateDisplay();
  });
}

runCalculator();
