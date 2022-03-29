
var exp = "";
function showMessage() {
    document.getElementById('ans').value = exp;
}

function handlebuttons(e) {
    exp += e.target.value;
    showMessage();

}

function handleEquals() {
    let result;
    if (exp.includes('+')) {
        let result = exp.split('+');
        addNumbers(result);
    }
    else if (exp.includes('-') && !exp.includes('*') && !exp.includes('/')) {
        let result = exp.split('-');
        subtractNumber(result);
    }
    else if (exp.includes('x')) {
        let result = exp.split('x');
        multiplyNumber(result);
    }
    else if (exp.includes('%')) {
        let result = exp.split('%');
        divideNumber(result);
    }
    showMessage();

}

function addNumbers(result) {
    if(Number.isSafeInteger(parseInt(result[0])) && Number.isSafeInteger(parseInt(result[1]))){
    exp = parseInt(result[0]) + parseInt(result[1]);
    }
    else{
        exp = "Error: Number is not typeSafe ";
    }
}
function subtractNumber(result) {
    if(Number.isSafeInteger(parseInt(result[0])) && Number.isSafeInteger(parseInt(result[1]))){
    exp = parseInt(result[0]) - parseInt(result[1]);
    }
     else{
        exp = "Error: Number is not typeSafe ";
    }
 }
function multiplyNumber(result) {
    if(Number.isSafeInteger(parseInt(result[0])) && Number.isSafeInteger(parseInt(result[1]))){
    exp = parseInt(result[0]) * parseInt(result[1]);
    }
    else{
        exp = "Error: Number is not typeSafe "
    }
}

function divideNumber(result) {

    try {
        if(Number.isSafeInteger(parseInt(result[0])) && Number.isSafeInteger(parseInt(result[1])) && (parseInt(result[1] === 0))){
            exp = parseInt(result[0]) / parseInt(result[1]);
            }
            else{
                exp = "Error: Number is not typeSafe "
            }
    }

    catch (Error) {
        exp = `Error:${Error.message}`;

    }
    showMessage();
}

function handleClear() {
    exp = "";
    showMessage();
}



