
function showMessage() {
    document.getElementById('ans').value = exp;
}
exp = "";
function handlebuttons(e) {
    exp += e.target.value;
    showMessage();

}

function handleEquals() {
    let result;
    if (exp.includes('+')) {
        result = exp.split('+');
        addNumbers(result);
    }
    else if (exp.includes('-') && !exp.includes('*') && !exp.includes('/')) {
        result = exp.split('-');
        subtractNumber(result);
    }
    else if (exp.includes('x')) {
        result = exp.split('x');
        multiplyNumber(result);
    }
    else if (exp.includes('%')) {
        result = exp.split('%');
        divideNumber(result);
    }
    showMessage();

}

function addNumbers(result) {
    exp = (parseFloat(result[0]) + parseFloat(result[1])).toFixed(2);
}
function subtractNumber(result) {
    exp = (parseFloat(result[0]) - parseFloat(result[1])).toFixed(2);
    console.log(result[0]);
}
function multiplyNumber(result) {
    exp = (parseFloat(result[0]) * parseFloat(result[1])).toFixed(2);
}
function divideNumber(result) {

    try {
        if (result[1] == 0) {
            throw "Cannot divide by 0";
        }
        else {
            exp = (parseFloat(result[0]) / parseFloat(result[1])).toFixed(2);
        }
    }
    catch (err) {
        exp = err;

    }
    showMessage();
}

function handleClear() {
    exp = "";
    showMessage();
}



