var data = employeeData;
console.log(data);

viewEmpBtn.addEventListener("click", viewEmployee);


function viewEmployee(){
        let table = document.createElement("table");
        let col = [];
        for (i = 0; i < data.length; i++) {
            for (key in data[i]) {
                if (col.indexOf(key) == -1) {
                    col.push(key)
                }
            }
        }
        let tableRow = table.insertRow(-1);
        for (let i = 0; i < col.length; i++) {
            let tableHeader = document.createElement("th")
            tableHeader.innerHTML = col[i];
            tableRow.appendChild(tableHeader);
        }
        for (let i = 0; i < data.length; i++) {
            tableRow = table.insertRow(-1);
            for (let j = 0; j < col.length; j++) {
                let tabCell = tableRow.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }
        let divContainer = document.getElementById("employeeData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }

function addEmployee() {
}

function editEmployee(){
    
}

function deleteEmployee(){
    
}
function filterEmployee(){
    
}