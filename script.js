// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;
let grid = document.getElementById("grid");
let selected_cell = null;

// Add a row
function addR() {
    if(numRows == 0 && numCols == 0) numCols += 1;
    numRows += 1; 
    let new_row = document.createElement("tr");
  
    for(let i = 0; i < numCols; i++){
        let cell = document.createElement("td");
        cell.addEventListener('click', () => { 
            selectColor();
            cell.style.backgroundColor = colorSelected; 
        });
        new_row.appendChild(cell);
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
        let cell = document.createElement("td");
        cell.addEventListener('click', () => { 
            selectColor(); 
            cell.style.backgroundColor = colorSelected; 
        });
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
    let cells = document.getElementsByTagName("td")
    selectColor();
    for(let cell of cells){
        if(cell.style.backgroundColor ='white'){
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    let cells = document.getElementsByTagName("td")
    selectColor();
    for(let cell of cells){
        cell.style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    let cells = document.getElementsByTagName("td")
    selectColor();
    for(let cell of cells){
        cell.style.backgroundColor = 'white';
    }
}