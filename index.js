
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

var switchElement = document.getElementsByClassName("switch")[0];
switchElement.addEventListener("click" , function (event) {
	if(event.target.checked === true) {
		document.getElementsByClassName("theme-text")[0].classList.add("theme-text-1");
		document.getElementsByClassName("navbar-brand")[0].classList.add("navbar-brand-1");
		document.getElementsByClassName("ans-box")[0].classList.add("ans-box-1");
		document.getElementsByClassName("keypad")[0].classList.add("keypad-light");
		document.getElementsByClassName("blue-btn")[0].classList.add("green-btn");
		document.getElementsByClassName("blue-btn")[1].classList.add("green-btn");
		document.getElementsByClassName("red-btn")[0].classList.add("orange-btn");
		document.querySelector("body").classList.add("body");
		document.querySelector("h1").classList.add("h1-1");

		for(var i = 0; i < document.getElementsByClassName("btn").length; i++)
			document.getElementsByClassName("btn")[i].classList.add("btn-1");

	} else {
		document.getElementsByClassName("theme-text")[0].classList.remove("theme-text-1");
		document.getElementsByClassName("navbar-brand")[0].classList.remove("navbar-brand-1");
		document.getElementsByClassName("ans-box")[0].classList.remove("ans-box-1");
		document.getElementsByClassName("keypad")[0].classList.remove("keypad-light");
		document.getElementsByClassName("blue-btn")[0].classList.remove("green-btn");
		document.getElementsByClassName("blue-btn")[1].classList.remove("green-btn");
		document.getElementsByClassName("red-btn")[0].classList.remove("orange-btn");
		document.querySelector("body").classList.remove("body");
		document.querySelector("h1").classList.remove("h1-1");

		for(var i = 0; i < document.getElementsByClassName("btn").length; i++)
			document.getElementsByClassName("btn")[i].classList.remove("btn-1");
	}
});

var dotCount = 0;
var operatorCount = 0;












