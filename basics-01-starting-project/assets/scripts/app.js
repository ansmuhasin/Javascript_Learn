let currentResult = 0;

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

function add(){
    const inputValue = getUserInputNumber()
    const outputMessage = `${currentResult} + ${inputValue}`;
    currentResult = currentResult + inputValue;

    outputResult(currentResult, outputMessage)
}
function subtract(){
    const inputValue = getUserInputNumber()
    const outputMessage = `${currentResult} - ${inputValue}`;
    currentResult = currentResult - inputValue;

    outputResult(currentResult, outputMessage)
}
function multiply(){
    const inputValue = getUserInputNumber()
    const outputMessage = `${currentResult} * ${inputValue}`;
    currentResult = currentResult * inputValue;

    outputResult(currentResult, outputMessage)
}
function divide(){
    const inputValue = getUserInputNumber()
    const outputMessage = `${currentResult} / ${inputValue}`;
    currentResult = currentResult / inputValue;

    outputResult(currentResult, outputMessage)
}

function getUserInputNumber(){
    return parseInt(userInput.value);
}