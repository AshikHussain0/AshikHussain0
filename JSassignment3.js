

// // var allData = '<table border="1"><thead><tr><th>Name</th><th>Employee Id</th><th>Designation</th><th>Address</th></thead><tbody>';
// var selectedRow = null;
// function onFormSubmit() {
//     event.preventDefault();
//     let empdata = new Employee();
//     if (selectedRow === null) {
//         empRecord(empdata);
//     }
//     else {
//         updateEmpData(empdata);
//     }
//     clearEmpForm();
// }

class Employee {
    constructor() {
        this.name = document.getElementById("name").value;
        this.empId = document.getElementById("empId").value;
        this.designation = document.getElementById("designation").value;
        this.address = document.getElementById("address").value;

    }
}

function empRecord(empdata) {
    if (empdata.name !== '' && empdata.empId !== '' && empdata.designation !== '' && empdata.addres !== '') {
        document.getElementById('message').innerHTML = '';
        var table = document.getElementById("showRecord").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        var column1 = newRow.insertCell(0);
        column1.innerHTML = empdata.name;
        var column2 = newRow.insertCell(1);
        column2.innerHTML = empdata.empId;
        var column3 = newRow.insertCell(2);
        column3.innerHTML = empdata.designation;
        var column4 = newRow.insertCell(3);
        column4.innerHTML = empdata.address;
        var column5 = newRow.insertCell(4);
        column5.innerHTML = `<button onClick='editEmpData(this)'>Edit</button>`;
    }
    else {
        document.getElementById('message').innerHTML = 'Please enter valid Inputs';
    }
}

function editEmpData(td) {
    empRow = td.parentElement.parentElement;
    document.getElementById('name').value = empRow.cells[0].innerHTML;
    document.getElementById('empId').value = empRow.cells[1].innerHTML;
    document.getElementById('designation').value = empRow.cells[2].innerHTML;
    document.getElementById('address').value = empRow.cells[3].innerHTML;
}

function updateEmpData(empdata) {
    empRow.cells[0].innerHTML = empdata.name;
    empRow.cells[1].innerHTML = empdata.empId;
    empRow.cells[2].innerHTML = empdata.designation;
    empRow.cells[3].innerHTML = empdata.address;
}

function clearEmpForm() {
    document.getElementById('name').value = '';
    document.getElementById('empId').value = '';
    document.getElementById('designation').value = '';
    document.getElementById('address').value = '';
    empRow = null;
}
function hideShow() {
    var show = document.getElementById("mytable");
    if (show.style.display === "block") {
        show.style.display = "none";
    } else {
        show.style.display = "block";
    }
}


var empRow = null;
function onSubmitEmpData() {
    event.preventDefault();
    let empdata = new Employee();
    if (empRow === null) {
        empRecord(empdata);
    }
    else {
        updateEmpData(empdata);
    }
    clearEmpForm();
}