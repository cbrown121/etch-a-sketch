// Create a 16x16 grid that will be stored in the div 

// First need to reference the container so that the grids can be stored in there

const container = document.querySelector(".container");



// now need to make a function that will create an x by x grid based on a given number

function createGrid(number) {
    for (let x = 0; x < number; x++) {
        for (let y = 0; y < number; y++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            container.appendChild(gridItem);
        }
    }
}

createGrid(16);