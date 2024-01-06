let lastOperand = 0;
let repeatOperand = 0;
let operation = null;
let lastIsOp = false;

const inputWindow = document.querySelector("#inputWindow");

document.querySelectorAll(".btn_num").forEach(element => {
    element.addEventListener("click", function () {
        if (lastIsOp) 
        {
            inputWindow.value = "";
            lastIsOp = false;
        }
        if (inputWindow.value == 0) inputWindow.value = "";
        inputWindow.value += this.textContent;
    });
});

document.querySelectorAll(".btn_op").forEach(element => {
    element.addEventListener("click", function () {
        repeatOperand = 0;
    });
});

document.querySelector("#btn_sum").addEventListener("click", function (){
    operation = "sum";
    if (!lastIsOp)
    {
        inputWindow.value = parseInt(inputWindow.value) + lastOperand;
        lastOperand = parseInt(inputWindow.value);
    }
    lastIsOp = true;
});

document.querySelector("#btn_sub").addEventListener("click", function (){
    operation = "sub";
    if (!lastIsOp)
    {
        inputWindow.value = parseInt(inputWindow.value) - lastOperand;
        lastOperand = parseInt(inputWindow.value);
    }
    lastIsOp = true;
});

document.querySelector("#btn_calc").addEventListener("click", function (){
    if (!lastIsOp)
    {
        repeatOperand = parseInt(inputWindow.value);
    }
    if (operation === "sum") inputWindow.value = lastOperand + repeatOperand;
    else if (operation === "sub") inputWindow.value = lastOperand - repeatOperand;
    lastOperand = parseInt(inputWindow.value);

    lastIsOp = true;
});

document.querySelector("#btn_clr").addEventListener("click", function () {
    lastOperand = 0;
    repeatOperand = 0;
    operation = null;
    lastIsOp = false;
    inputWindow.value = "0";
});