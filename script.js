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
const content=[];
//variable that stores if cleared
let cleared=false;

//Function that can do any operation
function operate(a, op, b){
    if(op=="+"){
        return add(a, b);
    }

    else if(op=="-"){
        return subtract(a, b);
    }

    else if(op=="*"){
        return multiply(a, b);
    }

    else if(op=="/"){
        return divide(a, b);
    }
}

//Functions to update, clear and populate display

function updateDisplay(){
    const container=document.querySelector(".display");
    const display=container.firstElementChild;
    display.textContent=content.join("");
}

function clear(){
    content.splice(0, 3);
    cleared=true;   
    updateDisplay();
}

function addContent(a){
    content.push(a);
    updateDisplay();
}

//adds extra digits to number on display
function addDigit(a, b){
    const combined=content[b]+a;
    content.splice(b, 1, combined);
    updateDisplay();
}
//functionality for number buttons, right now they add strings
const numButtons=document.querySelectorAll(".number");
numButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const output=button.textContent;
        //does different things depending on how long output array is
        //right now will clear the display but that can be changed later
        if(cleared===false){
            clear();
        }

        if(content.length==0||content.length==2){
            addContent(output);
        }
        else if(content.length==1||content.length==3){
            addDigit(output, content.length-1);
        }
       
    });
});

//functionality for clear button
const clearButton=document.querySelector("#clear")
clearButton.addEventListener("click", ()=>{
    clear()
});

//functionality for operator buttons
const opButtons=document.querySelectorAll(".op");
opButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const output=button.textContent;
        cleared=true;
        //this is so if they just got an answer its possible to add more numbers
        if(content.length==1){
            addContent(output);
        }   
        else if(content.length==3){
            //add later for if they want to chain operation
            //calculate answer, then add content push but dont update display
            cleared=true;
        }
    });
});

//functionality for equal button
const equalButton=document.querySelector("#equals");
equalButton.addEventListener("click", ()=>{
    if(content.length==3){
        calculateAnswer();
    } 
});

//calculate answer function, sets cleared to false and rounds decimal, and displays answer
function calculateAnswer(){
    const answer=operate(parseFloat(content[0]), content[1].toString(), parseFloat(content[2]));
    content.splice(0, 3);
    cleared=false;
    addContent(answer.toFixed(8).toString());
}

