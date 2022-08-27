//Calculate stuff!
const btn = document.querySelectorAll('.btn');
const remove = document.querySelectorAll('.delete');
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
        current += button.textContent;

        //scuffed attempt at using regex to eval
        if (current.match(regex) !== null) {
            temp = current;
            current = current[current.length - 1];
        }
    return console.log(current);
}

function currentCalc() {



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