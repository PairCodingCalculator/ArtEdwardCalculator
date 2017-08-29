"use strict";


var numberBtns = document.getElementsByClassName("number");
var operatorBtns = document.getElementsByClassName("operator");
var clear = document.getElementById("dblbutton");
var equals = document.getElementById("equals");

var leftDisplay = document.getElementById("right");
var middleDisplay = document.getElementById("middle");
var rightDisplay = document.getElementById("left");
console.log(numberBtns);


for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", function () {
        console.log("middle display" + middleDisplay.value);

        if (rightDisplay.value === "" && middleDisplay.value === "") {
            var oldNumber = leftDisplay.getAttribute("value");
            if (oldNumber === null) {
                oldNumber = "";
            }
            var newValue = oldNumber + this.getAttribute("value");
            // console.log(newValue);
            leftDisplay.setAttribute("value", newValue);
            console.log(numberBtns);

        } else if (leftDisplay.value !== "" && middleDisplay.value !== "") {
            var oldNumber = rightDisplay.getAttribute("value");
            if (oldNumber === null) {
                oldNumber = "";
            }
            var newValue = oldNumber + this.getAttribute("value");
            console.log(newValue);
            rightDisplay.setAttribute("value", newValue);
            console.log(numberBtns);
        } else {
            console.log("its broken");
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
        case "*":
            total = leftValue * rightValue;
            break;

    }

    console.log(total);
    leftDisplay.setAttribute("value", total);
    rightDisplay.setAttribute("value","");
    middleDisplay.setAttribute("value","");
});

var clearAll = function() {
        leftDisplay.value = "";
        middleDisplay.value = "";
        rightDisplay.value = "";

}
    clear.addEventListener("click", clearAll, false);
//
//
//         // middleDisplay.innerHTML = "";
//         // rightDisplay.innerHTML = "";
//         // var leftValue = "";
//         // var operator = "";
//         // var rightValue = "";
//         leftDisplay.innerHTML = "";
//         rightDisplay.innerHTML = "";
//         operator.setAttribute("value", "");
//         console.log('hello');
//     })}


// var clear = document.getElementById("dblbutton");
//
// document.querySelector("#dblbutton").addEventListener("click", function(){
//     leftDisplay.innerHTML = "";
//         rightDisplay.innerHTML = "";}, false);


