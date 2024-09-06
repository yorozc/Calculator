let num1, num2, operator;
let num1flag = true; 
let num2flag = false;
let opflag = false;
let selectedButton = null;
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
        }

        if(event.target.classList.contains('operator')){
            numDisplay.textContent = String(Number(num1));
            operator = event.target.value;
            console.log(operator); 
            num1flag = false;
            num2flag = true;
            num2 = 0;
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