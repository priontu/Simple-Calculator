let value = null;
let sign = "";
let store = "";

const inputbox = document.querySelector('.input-value');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const clear = document.querySelector('.clear-button');
const backspace = document.querySelector('.backspace');
const zero = document.querySelector('.zero');
const division = document.querySelector('.division');
const multiply = document.querySelector('.multiplication');
const add = document.querySelector('.plus');
const subtract = document.querySelector('.minus');
const equals = document.querySelector('.equals');

clear.addEventListener('click', function(){
    inputbox.value = "0";
    value = null;
    sign = "";
    store = "";
})
seven.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "7";
})
eight.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "8";
})
nine.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "9";
})
four.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "4";
})
five.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "5";
})
six.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "6";
})
one.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "1";
})
two.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "2";
})
three.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "3";
})
zero.addEventListener('click', function(){
    inputbox.value = zeroCheck();
    inputbox.value += "0";
})
add.addEventListener('click', function(){
    sign = "+";
    value = equalsOperation(sign);
    console.log(value);
    inputbox.value = "0";

})
subtract.addEventListener('click', function(){
    sign = "-";
    value = equalsOperation(sign);
    console.log(value);
    inputbox.value = "0";
})
multiply.addEventListener('click', function(){
    sign = "*";
    value = equalsOperation(sign);
    console.log(value);
    inputbox.value = "0";

})
division.addEventListener('click', function(){
    sign = "/";
    value = equalsOperation(sign);
    console.log(value);
    inputbox.value = "0";
})
equals.addEventListener('click', function(){
    value = equalsOperation(sign);
    inputbox.value = value.toString();
    sign = "";
    store = "";
    value = null;
})
backspace.addEventListener('click', function(){
    const dummy = inputbox.value;
    inputbox.value = dummy.substring(0, dummy.length - 1);
    if (inputbox.value === ""){
        inputbox.value = "0";
    }
})

function equalsOperation(sign){
    if (value === null){
        store = sign;
        return parseInt(inputbox.value);
    }
    if (store === "+"){
        store = sign;
        return value + parseInt(inputbox.value);
    }
    if (store === "-"){
        store = sign;
        return value - parseInt(inputbox.value);
    }
    if (store === "*"){
        store = sign;
        return value * parseInt(inputbox.value);
    }
    if (store === "/"){
        store = sign;
        return value / parseInt(inputbox.value);
    }
}
function zeroCheck(){
    if (inputbox.value === "0"){
        return "";
    }
    else{
        return inputbox.value;
    }
}