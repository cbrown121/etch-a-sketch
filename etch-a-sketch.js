// Create a 16x16 grid that will be stored in the div 

// First need to reference the container so that the grids can be stored in there

const container = document.querySelector(".container");

let gridNum = 0;

function promptMe() {
    container.innerHTML = '';
    gridNum = prompt("Please provide a number less than or equal to 100");
    if (gridNum > 100) {
        alert("input is too high, try again");
        promptMe();
    } else {
        console.log(gridNum);
        createGrid(gridNum);
    }
    
}

// now need to make a function that will create an x by x grid based on a given number

function createGrid(gridNum) {
    for (let x = 0; x < gridNum; x++) {
        for (let y = 0; y < gridNum; y++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.flex = `0 0 calc(100% / ${gridNum})`; // dynamic flex-basis
            container.appendChild(gridItem);
            gridItem.addEventListener("mouseover", changeColor);
        }
    }

    function changeColor(event) {
        event.target.style.backgroundColor = "blue";
    }

    /* Add a button on the top of the screen that will send the 
    user a popup asking for the number of squares per side for the new grid. 
    */
    
}