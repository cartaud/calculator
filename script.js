let scrn = document.getElementById('value'); //will store current value of operation at top of screen
let screenBot = document.getElementById('entering'); //display what user is entering
let disp = [];
let j = 0;


// set up x(num before operator) and y(num after operator) values
//set up an if else chain to figure what operator is and then x + y, x-y, x*y, ect...
function enter(val) {
    
    //when an integer button gets pressed, this function stores all the values in disp arr
    let x = val/1
    if (x == val && j <= 1) {
        disp.push(val);
        screenBot.textContent = disp.join('');
    }
    else if (x !== val  && j==0) {
        disp.push(val);
        screenBot.textContent = disp.join('');
        j++;
    }
    else if (x !== val && j==1) {
        let answer = disp.join('');
        screenBot.textContent = '';
        calculate(answer)
        
    } 
    
    
}

function calculate(answer) {
    if (answer.includes('+')) {
        let index = answer.indexOf('+');
        let x = parseInt(answer.slice(0,index))
        let y = parseInt(answer.slice(index+1))
        scrn.textContent = x + y;
    }
    else if (answer.includes('-')) {
        let index = answer.indexOf('-');
        let x = parseInt(answer.slice(0,index))
        let y = parseInt(answer.slice(index+1))
        scrn.textContent = x - y;
    }
    else if (answer.includes('*')) {
        let index = answer.indexOf('*');
        let x = parseInt(answer.slice(0,index))
        let y = parseInt(answer.slice(index+1))
        scrn.textContent = x * y;
    }
    else if (answer.includes('/')) {
        let index = answer.indexOf('/');
        let x = parseInt(answer.slice(0,index))
        let y = parseInt(answer.slice(index+1))
        scrn.textContent = x / y;
    }
    
    //if disp contains +
    //then value before + value after
    //repeat for each possible operator
}

// function operation(op) {
    
//     toDo.push(op)
//     screenBot.textContent = this.value + toDo
// }