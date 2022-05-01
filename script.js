 
const enteringValueEl = document.getElementById('entering'); //display what user is entering

const clearEl = document.querySelector('#clear');
clearEl.addEventListener('click', clear)


let first = [];
let op = [];
let second = []
let j = 0;



function enter(val) {
    if (op.length == 0 && val/1 == val && j == 0) {
        first.push(val);
        enteringValueEl.textContent = first.join('');
    }
    else if (op.length == 0 && val/1 != val && val != '=') {
        op.push(val);
        enteringValueEl.textContent = first.join('') + op.join('');
    }
    else if (op.length != 0 && val/1 == val) {
        second.push(val);
        enteringValueEl.textContent = first.join('') + op.join('') + second.join('');
    }
    else if (op.length != 0 && val/1 != val && second.length > 0) {
        if (val == '=') {
            calculate()
        }
        else {
            calculate(val)
        }
    }
}

function decimal(dec) {
    if (op.length == 0 && first.indexOf('.') < 0) {
        if (first.length == 0 || (first.indexOf('-') > -1 && first.length == 1)) {
            first.push(0);
        }
        first.push(dec)
        enteringValueEl.textContent = first.join('');
    }
    if (op.length != 0 && second.indexOf('.') < 0) {
        if (second.length == 0 || (second.indexOf('-') == 0)) {
            second.push(0);
        }
        second.push(dec)
        enteringValueEl.textContent = first.join('') + op.join('') + second.join('');
    }
}

function negative(neg) {
    if (op.length == 0 && first.length == 0) {
        first.push(neg)
        enteringValueEl.textContent = first.join('');
    }
    if (op.length != 0 && second.length == 0) {
        second.push(neg)
        enteringValueEl.textContent = first.join('') + op.join('') + second.join('');
    }
}

function calculate(nextOp) {
   
    let x = parseInt(first.join(''));
    let y = parseInt(second.join(''));
    if (op[0] == '+') {
        enteringValueEl.textContent = x + y;
    }
    else if (op[0] == '-') {        
        enteringValueEl.textContent = x - y;
    }
    else if (op[0] == '*') {
        enteringValueEl.textContent = x * y;
    }
    else if (op[0] == '/') {
        enteringValueEl.textContent = x / y;
    }
    j++;
    first.length = 0;
    op.length = 0;
    second.length = 0;
    first[0] = enteringValueEl.textContent
    enter(nextOp)
}


function clear() {
    j = j-j;
    first.length = 0;
    op.length = 0;
    second.length = 0;
    enteringValueEl.innerHTML = ``;
    
}