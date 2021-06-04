
function isOperator(userInput) {
    isOpr = false;
    switch(userInput) {
        case "+": {
            isOpr = true;
            break;
        }
        case "-": {
            isOpr = true;
            break;
        }
        case "*": {
            isOpr = true;
            break;
        }
        case "/": {
            isOpr = true;
            break;
        }
    }
    return isOpr;
}

function calculate(firstNumber , secondNumber , operator) {
    var result = 0;
    switch(operator) {
        case "+" : {
            result = firstNumber + secondNumber;
            break;
        }
        case "-" : {
            result = firstNumber - secondNumber;
            break;
        }
        case "*" : {
            result = firstNumber * secondNumber;
            break;
        }
        case "/" : {
            result = firstNumber / secondNumber;
            break;
        }
    }
    return result;
}

function performCalculation(userInput) {
    var firstOperand = "";
    var secondOperand = "";
    var operator = ""
    var i = 0;
    for(; i < userInput.length; i++) {
        if(isOperator(userInput[i])) {
            operator = userInput[i];
            i++;
            break;
        } else {
            firstOperand += userInput[i];
        }
    }

    for(; i < userInput.length; i++) {
        secondOperand += userInput[i];
    }

    var firstNumber = parseFloat(firstOperand);
    var secondNumber = parseFloat(secondOperand);

    var output = calculate(firstNumber , secondNumber , operator);
    return output;
}

function displayNumber(number) {

    var querySelector = document.querySelector(".ans-text");
    var lastElement = querySelector.textContent[querySelector.textContent.length - 1];

    if(number === "RESET") {
        operatorCount = 0;
        dotCount = 0;
        querySelector.textContent = "";
    } else if(number === "DEL") {
        if(lastElement === ".")
            dotCount--;
        if(isOperator(lastElement))
            operatorCount--;
        querySelector.textContent = querySelector.textContent.slice(0 , querySelector.textContent.length - 1);
    } else if(number === ".") {
        if(dotCount === 0) {
            dotCount++;
            querySelector.textContent += ".";
        } else {
            alert("Invalid Operation");
        }
    } else if(number === "=") {
        if(operatorCount === 1 && (lastElement !== "." && isOperator(lastElement) !== true)) {
            querySelector.textContent = performCalculation(querySelector.textContent);
            operatorCount = 0;
        } else {
            alert("Invalid Operation");
        }
    } else if(isOperator(number)) {
        if(operatorCount !== 0 || lastElement === "." || querySelector.textContent === "")
            alert("Invalid Operation");
        else {
            dotCount = 0;
            querySelector.textContent += number;
            operatorCount++;
        }
    } else {
        querySelector.textContent += number;
    }
}


var arrayOfButtons = document.getElementsByClassName("btn");
for(var i = 0; i < arrayOfButtons.length; i++) {
    arrayOfButtons[i].addEventListener("click" , function () {
        displayNumber(this.innerHTML);
    });
}

var dotCount = 0;
var operatorCount = 0;