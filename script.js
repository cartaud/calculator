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
        let answr = disp.join('');
        scrn.textContent = parseInt(answr);
        screenBot.textContent = '';
        disp = [];
        j=0;
    } 
    
    
}

// function operation(op) {
    
//     toDo.push(op)
//     screenBot.textContent = this.value + toDo
// }