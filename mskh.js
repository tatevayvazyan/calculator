let firstValue = 0;
let secondValue = 0;
let action = '';

function addNum(num) {
    document.getElementById("numVal").value += num;
}

function toDoAction(act) {
    action = act;
    document.getElementById("numVal").value += act;
}

function isEqual() {
    let value = document.getElementById("numVal").value;
    console.log(value)
    let res = value.split(action);
    console.log(res)
    let result = 0;
    const num1 = parseFloat(res[0]);
    const num2 = parseFloat(res[1])
    switch(action) {
        case '+':  
            result = num1 + num2;
            break;
        case '-':  
            result = num1 - num2;
        break;
        case '/':  
            result = num1 / num2;
        break; 
        case '*':  
            result = num1 * num2;
        break; 
        
            default:
    }
    document.getElementById("numVal").value = result;
}

function ac() {
    console.log("here")
    document.getElementById("numVal").value = '';
}