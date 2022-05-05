const message = 'Калькулятор'

document.querySelector('#header').innerHTML = message

let num1 = 0
let num2 = 0;


const handleNum1Change = (event) => {
    const value = event.target.value;
    
    if (Number.parseFloat(value)) {
        num1 = +value;
    } else {
        num1 = 0
    };
};


document.getElementById("inputNum2").oninput = (event) => {
    const value = event.target.value;
    
    if (Number.parseFloat(value)) {
        num2 = +value;
    } else {
        num2 = 0
    };
};


const calc = () => {
    document.querySelector('#result').value = num1 + num2;
};