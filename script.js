// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = 'white';
let grid = document.getElementById("grid");
let selected_cell = null;

// Add a row
function addR() {
    if(numRows == 0 && numCols == 0) numCols += 1;
    numRows += 1; 
    let new_row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.addEventListener('click', () => { cell.style.backgroundColor = colorSelected });
    for(let i = 0; i < numCols; i++){
        new_row.appendChild(cell);
    }
    grid.appendChild(new_row);
}   


function updateColor(){
    let current_selection = document.getElementById('selectedColorId');
    if(current_selection !="SELECT"){
        colorSelected = current_selection;
    }else{
        colorSelected = 'white';
    }
}

// Add a column
function addC() {
    if(numCols == 0 || numRows == 0){
        addR();
    }
    numCols += 1; 
    for(let i = 0; i < numRows; i++){
        let cell = document.createElement("td");
        cell.addEventListener('click', () => { cell.style.backgroundColor = colorSelected });
        grid.children[i].appendChild(cell);
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