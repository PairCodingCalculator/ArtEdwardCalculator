"use strict";


var numberBtns = document.getElementsByClassName("number");
var operatorBtns = document.getElementsByClassName("operator");
var clear = document.getElementById("clear");
var equals = document.getElementById("equals");

var leftDisplay = document.getElementById("right");
var middleDisplay = document.getElementById("middle");
var rightDisplay = document.getElementById("left");
console.log(numberBtns);


for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", function () {
        console.log("middle display" + middleDisplay.value);

        if (rightDisplay.value === "" && middleDisplay.value === "") {
            // exactly the same but with rightDisplay;
            var oldNumber = leftDisplay.getAttribute("value");
            if (oldNumber == null) {
                oldNumber = "";
            }
            var newValue = oldNumber + this.getAttribute("value");
            console.log(newValue);
            leftDisplay.setAttribute("value", newValue);
            console.log(numberBtns);

        } else if (leftDisplay.value !== "" && middleDisplay.value !== "") {
            var oldNumber = rightDisplay.getAttribute("value");
            if (oldNumber == null) {
                oldNumber = "";
            }
            var newValue = oldNumber + this.getAttribute("value");
            console.log(newValue);
            rightDisplay.setAttribute("value", newValue);
            console.log(numberBtns);
        }
    });
}

for (var i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener("click", function () {
        middleDisplay.setAttribute("value", this.getAttribute("value"));
        console.log(operatorBtns);
    });
}
equals.addEventListener("click", function () {
    var leftValue = parseInt(leftDisplay.getAttribute("value"));
    var operator = middleDisplay.getAttribute("value");
    var rightValue =  parseInt(rightDisplay.getAttribute("value"));
    var total;

    switch (operator){
        case "+":
            total = leftValue + rightValue;
            break;
        case "-":
            total = leftValue - rightValue;
            break;
        case "/":
            total = leftValue / rightValue;
            break;
        case "X":
            total = leftValue * rightValue;
            break;
    }
    console.log(total);
    leftDisplay.setAttribute("value", total);
    rightDisplay.setAttribute("value","");
    middleDisplay.setAttribute("value","");
});
function clear() {

    clear.addEventListener("c", function () {
        var leftValue = "";
        var operator = "";
        var rightValue = "";
        console.log(clear);
        leftValue.setAttribute("value", "");
        rightValue.setAttribute("value", "");
        operator.setAttribute("value", "");
    })}



