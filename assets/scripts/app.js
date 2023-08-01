const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOerpator;

  if (calculationType ==='add'){
    currentResult += enteredNumber;
    mathOerpator = '+';
  } else if(calculationType === 'subtract') {
    currentResult -= enteredNumber;
    mathOerpator = '-';
  } else if(calculationType === 'multiply') {
    currentResult *= enteredNumber;
    mathOerpator = '*';
  } else if(calculationType === 'divide') {
    currentResult /= enteredNumber;
    mathOerpator = '/';
  } else {
    console.log('error')
  }
  
  createAndWriteOutput(mathOerpator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('add');
}
function subtract() {
  calculateResult('subtract');
}
function multiply() {
  calculateResult('multiply');
}
function divide() {
  calculateResult('divide');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
