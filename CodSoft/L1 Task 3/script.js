let displayValue = '';

function addToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function operate(operator) {
  if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  }
}
