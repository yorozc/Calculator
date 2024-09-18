let num1 = '';
let num2 = '';
let operator = '';
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
            }
            num1 += event.target.value;    
            console.log("num1:" + num1);
            numDisplay.textContent += event.target.value;
        
        } 
        
        if(event.target.classList.contains('numbers') && num2flag){
            if(opflag){
                num2 += event.target.value;
                console.log("Opflag Num2: " + num2);
                numDisplay.textContent += event.target.value; 

            }else{
                numDisplay.textContent = '';
                num2 += event.target.value;
                console.log("num2:" + num2);
                opflag = true;
                numDisplay.textContent = String(Number(num2));
            }
            if(prevOp.value === "%" || prevOp.value == "pos/neg"){
                prevOp.style.backgroundColor = 'rgb(255, 197, 90)';
            }else{
                prevOp.style.backgroundColor = 'rgb(44 ,78, 128)';
            }
            

        }

        if(event.target.classList.contains('operator')){
            numDisplay.textContent = num1;
            operator = event.target.value;
            console.log(operator); 
            num1flag = false;
            num2flag = true;
            event.target.style.backgroundColor = 'white';
            prevOp = event.target;
            
            
        }

        if(event.target.classList.contains('equal')){
            let result = operate(Number(num1), Number(num2), operator);
            console.log("result:" + result);
            numDisplay.textContent = result;
            num1 = result;
            num2 = '';
            opflag = false;
        }

    }
});

document.getElementById('clear').addEventListener('click', () =>{
    numDisplay.textContent = '0';
    num1 = '';
    num2 = '';
    num1flag = true;
    num2flag = false;
    opflag = false;
    if(prevOp.value === "%" || prevOp.value == "pos/neg"){
        prevOp.style.backgroundColor = 'rgb(255, 197, 90)';
    }else{
        prevOp.style.backgroundColor = 'rgb(44 ,78, 128)';
    }
    prevOp = '';
    
});

document.getElementById("pos/neg").addEventListener('click', ()=>{
    numDisplay.textContent = '';
    if(num1flag){
        num1 = Number(num1) * -1;
        console.log("pos/neg" + num1);
        numDisplay.textContent += num1;
    }

    else if(num2flag){
        num2 = Number(num2) * -1;
        console.log("pos/neg" + num2);
        numDisplay.textContent += num2;
    }
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
        case '%': 
            return num1 % num2;
    }
}