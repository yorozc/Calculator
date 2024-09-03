let num1 = 0;
let num2 = 0;
let operator = null;
const numDisplay = document.getElementById("display"); 

document.body.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        if(event.target.classList.contains('numbers')) {
            if(numDisplay.textContent === '0'){
                numDisplay.textContent = '';
            }
            //don't let user add more than one decimal
            const buttonValue = event.target.value;
            numDisplay.textContent += buttonValue
        }
        
    }
});

document.getElementById('clear').addEventListener('click', () =>{
    numDisplay.textContent = '0';
})
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2; 
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}



function operate(num1, num2, operator){
    //have switch statement to check which operator it is
}