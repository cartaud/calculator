const scrn = document.getElementById('value'); //will store current value of operation at top of screen
const screenBot = document.getElementById('entering'); //display what user is entering

const clearEl = document.querySelector('#clear');
clearEl.addEventListener('click', clear)


let first = [];
let op = [];
let second = []
let j = 0;



function enter(val) {
    
    if (op.length == 0 && val/1 == val && j == 0) {
        first.push(val);
        screenBot.textContent = first.join('');
    }
    else if (op.length == 0 && val/1 != val) {
        op.push(val);
        screenBot.textContent = first.join('') + op.join('');
    }
    else if (op.length != 0 && val/1 == val) {
        second.push(val);
        screenBot.textContent = first.join('') + op.join('') + second.join('');
    }
    else if (op.length != 0 && val/1 != val) {
        if (val == '=') {
            calculate()
        }
        else {
            calculate(val)
        }
    }
}


function calculate(nextOp) {
    let x = parseInt(first.join(''));
    let y = parseInt(second.join(''));
    if (op[0] == '+') {
        scrn.textContent = x + y;
    }
    else if (op[0] == '-') {
        scrn.textContent = x - y;
    }
    else if (op[0] == '*') {
        scrn.textContent = x * y;
    }
    else if (op[0] == '/') {
        scrn.textContent = x / y;
    }
    j++;
    first.length = 0;
    op.length = 0;
    second.length = 0;
    first[0] = scrn.textContent
    enter(nextOp)
}


function clear() {
    j = j-j;
    first.length = 0;
    op.length = 0;
    second.length = 0;
    screenBot.innerHTML = ``;
    scrn.innerHTML = ``;
}