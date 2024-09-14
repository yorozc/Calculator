let num1, num2, operator;
let num1flag = true; 
let num2flag = false;
let opflag = false;
let prevOp = null;
const numDisplay = document.getElementById("display"); 

//will probably have to be a function
document.body.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        //checks the first set of numbers
        if(event.target.classList.contains('numbers') && num1flag) {
            if(numDisplay.textContent === '0'){
                numDisplay.textContent = '';
                num1 = 0;
            }
            num1 += event.target.value;    
            console.log(num1);
            numDisplay.textContent += event.target.value;
        
        } 
        
        if(event.target.classList.contains('numbers') && num2flag){
            if(opflag){
                num2 += event.target.value;
                console.log(num2);
                numDisplay.textContent += event.target.value; 
            }else{
                numDisplay.textContent = '';
                num2 += event.target.value;
                opflag = true;
                numDisplay.textContent = String(Number(num2));
            }
            prevOp.style.backgroundColor = 'rgb(44 ,78, 128)';

        }

        if(event.target.classList.contains('operator')){
            numDisplay.textContent = String(Number(num1));
            operator = event.target.value;
            console.log(operator); 
            num1flag = false;
            num2flag = true;
            num2 = 0;
            event.target.style.backgroundColor = 'white';

            prevOp = event.target;
            
        }

        if(event.target.classList.contains('equal')){
            let result = operate(Number(num1), Number(num2), operator);
            console.log(result);
            
            numDisplay.textContent = result;
        }
    }
});

document.getElementById('clear').addEventListener('click', () =>{
    numDisplay.textContent = '0';
    num1 = 0;
    num2 = 0;
    num1flag = true;
    num2flag = false;
    opflag = false;
    prevOp = 'null';
});

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

    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}