//Calculate stuff!
const btn = document.querySelectorAll('.btn');

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
console.log(btn);