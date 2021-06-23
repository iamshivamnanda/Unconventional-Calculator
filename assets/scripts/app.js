const defaultResult = 0;
let currentResult = defaultResult;

function add(){
    // alert(parseInt(userInput.value));
    const currentdescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult,currentdescription);
}
function sub(){
    const currentdescription = `${currentResult} - ${userInput.value}`;
    currentResult = currentResult - parseInt(userInput.value);
    outputResult(currentResult,currentdescription);
}
function multiply(){
    const currentdescription = `${currentResult} * ${userInput.value}`;
    currentResult = currentResult * parseInt(userInput.value);
    outputResult(currentResult,currentdescription);
}
function dvison(){
    const currentdescription = `${currentResult} / ${userInput.value}`;
    currentResult = currentResult / parseInt(userInput.value);
    outputResult(currentResult,currentdescription);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',dvison);

