//Calculate stuff!
const btn = document.querySelectorAll('.btn');
const remove = document.querySelectorAll('.delete');
const bigCalc = document.querySelector('#current');
const smallCalc = document.querySelector('#prev');

let current = '';
let temp = '';
let prev = '';

const regex = /^\d+\W\d+\W$/;

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
    /*if (button.getAttribute('data-num') == '') {
        current += button.textContent;
    }*/
        if (document.getElementById('backspace').getAttribute('disabled') !== null) {
            document.getElementById('backspace').removeAttribute('disabled');
        }


        current += button.textContent;
        if (bigCalc.textContent == '0' && !(button.textContent == 'Clear') && !(button.textContent == '') && (button.getAttribute('data-num') != null)) {
            bigCalc.textContent = button.textContent;
        }

        else if (button.textContent == 'Clear') {
            bigCalc.textContent = 0;
            current = '';
        }
        else if (button.textContent == '' && bigCalc.textContent != '0') {
            const deleteRegex = /.$/;
            let str = bigCalc.textContent.replace(deleteRegex, '');
            bigCalc.textContent = str;
            if (bigCalc.textContent == '') {
                bigCalc.textContent += '0';
                document.getElementById('backspace').setAttribute('disabled', '');
            }

        }
        else if (!(button.getAttribute('id') == 'backspace')){
            bigCalc.textContent += button.textContent;
        }
        //scuffed attempt at using regex to eval
        if (current.match(regex) !== null) {
            
            //First Calculation - e.g. 9x5
            temp = current.slice(0, -1);

            //Next operator
            current = current[current.length - 1];
        }
    return console.log(bigCalc.textContent);
}

//
function currentCalc() {
    if (current == '=') {
        return 
    }


}


function calculate(a, b) {

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

}

function buttonSize() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].setAttribute('id', `btn-${i}`);
    }
}


buttonSize();
buttonListener();
//console.log(buttonListener());