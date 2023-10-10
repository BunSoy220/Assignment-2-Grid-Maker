// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let grid = document.getElementById("grid");

// Add a row
function addR() {
    if(numRows == 0 && numCols == 0) numCols += 1;
    numRows += 1; 
    let new_row = document.createElement("tr");
    for(let i = 0; i < numCols; i++){
        new_row.appendChild(document.createElement("td"));
    }
    grid.appendChild(new_row);
}

// Add a column
function addC() {
    if(numCols == 0 || numRows == 0){
        addR();
    }
    numCols += 1; 
    for(let i = 0; i < numRows; i++){
        grid.children[i].appendChild(document.createElement("td"));
    }
}

// Remove a row
function removeR() {
    grid.removeChild(grid.lastElementChild);
    if(numRows > 0){
        numRows -= 1;
    }
}

// Remove a column
function removeC() {
    if(numCols > 0){
        numCols -= 1;
    }
    for(let i = 0; i < numRows; i++){
        let current_row = grid.children[i];
        current_row.removeChild(current_row.lastElementChild);
        if(numCols == 0){
            grid.removeChild(current_row);
            --i;
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}