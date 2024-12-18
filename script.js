//Basic operations
function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide (a, b){
    return a/b;
}

//Global variables for numbers and operators
let numOne=0;
let op="none";
let numTwo=0;

//Function that can do any operation
function operate(a, op, b){
    if(op==="+"){
        return add(a, b);
    }

    else if(op==="-"){
        return subtract(a, b);
    }

    else if(op==="*"){
        return multiply(a, b);
    }

    else if(op==="/"){
        return divide(a, b);
    }
}