//Calculate stuff!
const btn = document.querySelectorAll('.btn');
const remove = document.querySelectorAll('.delete');
const bigCalc = document.querySelector('#current');
const smallCalc = document.querySelector('#prev');
const period = document.querySelector('#period');

let current = '';
let temp = '';
let prev = '';

//var periodArr = [];

const regex = /^(-)?(\d+)?(\.\d+)?\s\W\s\d+(\.\d+)?\s\W\s$/;
const zeroDivision = /^(-)?\d+(\.\d+)?\s÷\s0\s$/;

function buttonListener() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => evaluateInput(btn[i]));
    }

    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', () => evaluateInput(remove[i]));
    }


}

//Wow this is really fucking me in the ass
function evaluateInput(button) {
    
        if (document.getElementById('backspace').getAttribute('disabled') !== null) {
            document.getElementById('backspace').removeAttribute('disabled');
        }

      
        if (bigCalc.textContent == '0' && !(button.textContent == 'Clear') && !(button.textContent == '') && (button.getAttribute('data-num') != null)) {
            bigCalc.textContent = button.textContent;
            current += button.textContent;
            
            //button.textContent == 'Clear'
        }

        else if (button.textContent == 'Clear') {
            bigCalc.textContent = 0;
            smallCalc.textContent = '';
            current = '';
            
            //periodArr = [];
        }
        else if (button.textContent == '' && bigCalc.textContent != '0') {
            const deleteRegex = /(\d|\.|\s\W\s)$/;
            let str = bigCalc.textContent.replace(deleteRegex, '');
            bigCalc.textContent = str;
            current = str;
            //periodArr.pop();
            if (bigCalc.textContent == '') {
                bigCalc.textContent += '0';
                document.getElementById('backspace').setAttribute('disabled', '');
            }

        }
        else if (!(button.getAttribute('id') == 'backspace') && !(button.textContent == 'Clear')){
            //Ex: 5.5 or -5.5       
            const lastRegex = /^(-)?\d+(\.\d+\s)?\W\s/;
            //Looks back to see if there's a number and a period
            const decLookAround = /(?<=\d+\.\d+\s\W\s)/;
            //Ex: 5.5 + 5.5
            const regexRedux = /^(-)?\d+(\.\d+\s)?\W\s\d+$/;
            if (current.match(lastRegex) == null) {
                current += button.textContent;
                bigCalc.textContent += button.textContent;
                period.setAttribute('disabled', '');

                
            } else if (current.match(lastRegex) !== null) {
                current += button.textContent;
                bigCalc.textContent += button.textContent;
                period.setAttribute('disabled', '');

                
            }
/*
            if (current.match(decLookAround) == null || button['textContent'] != '.'){
                current += button.textContent;
                
                bigCalc.textContent += button.textContent;
                period.setAttribute('disabled', '');
            }
            if (current.match(lastRegex) !== null) {
                if (period.getAttribute('disabled') !== null) {
                    period.removeAttribute('disabled');
                }
                else if (current.match(regexRedux) !== null) {
                    period.setAttribute('disabled', '');
                }
            }
            */
        }
        //scuffed attempt at using regex to eval
        if (current.match(regex) !== null) {
            
            //First Calculation - e.g. 9x5
            temp = current.slice(0, -2);
            
            //Next operator
            var currentOp = current[current.length - 2];
            current = calc(temp).toString();

            if (currentOp.includes("=")) {
                if (temp.match(zeroDivision) !== null) {
                    bigCalc.textContent = 'Silly Goose, you can\'t divide by zero!';
                } else {
                smallCalc.textContent = bigCalc.textContent;
                bigCalc.textContent = calc(temp).toString();
                }
            } else {
                if (temp.match(zeroDivision) !== null) {
                    bigCalc.textContent = 'Silly Goose, you can\'t divide by zero!';
                } else {
                smallCalc.textContent = current;
                bigCalc.textContent = calc(temp).toString();
                }
            }
        }
    return console.log(current);
}

//Parses and calculates a given equation
function calc(str) {
    let arr = str.split(" ");
    let num = 0;
    let firstNum = arr[0];
    let tempOp = arr[1];
    let secondNum = arr[2];
    
    let operators = {
        '÷': '/',
        '×': '*',
    }

    if (!str.includes('.')) {
        switch(tempOp) {
            case '×':
                num = firstNum * secondNum;
                break;
            case '÷':
                num = firstNum / secondNum;
                break;
            case '-':
                num = firstNum - secondNum; 
                break;
            case '+':
                num = Number(firstNum) + Number(secondNum);
                break;
        }
    } else {
        switch(tempOp) {
            case '×':
                num = ((firstNum * 1000) * (secondNum * 1000)) / 1000000;
                break;
            case '÷':
                num = ((firstNum * 1000) / (secondNum * 1000)) / 1000;
                break;
            case '-':
                num = firstNum - secondNum; 
                break;
            case '+':
                num = Number(firstNum) + Number(secondNum);
                break;
        }
    }
    return num;

    
}


function buttonSize() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].setAttribute('id', `btn-${i}`);
    }
}

period.setAttribute('disabled', '');
buttonSize();
buttonListener();
period.setAttribute('disabled', '');
//console.log(buttonListener());