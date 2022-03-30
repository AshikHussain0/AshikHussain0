
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
    exp = parseInt(result[0]) + parseInt(result[1]);
    if (!Number.isSafeInteger(exp)) {
        exp = "Error: Number is not typeSafe ";
    }
}
function subtractNumber(result) {
    exp = parseInt(result[0]) - parseInt(result[1]);
    if (!Number.isSafeInteger(exp)) {
        exp = "Error: Number is not typeSafe ";
    }
}
function multiplyNumber(result) {
    exp = parseInt(result[0]) * parseInt(result[1]);
    if (!Number.isSafeInteger(exp)) {
        exp = "Error: Number is not typeSafe ";
    }
}

function divideNumber(result) {

    try {
        if (Number.isSafeInteger(parseInt(result[0])) && Number.isSafeInteger(parseInt(result[1]))) {
            if (parseInt(result[1]) === 0) {
                exp = "Error:Cannot divide by zero";
            }
            else {
                exp = parseInt(result[0]) / parseInt(result[1]);
            }
        }
        else {
            exp = "Error:Number is not typeSafe";
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



