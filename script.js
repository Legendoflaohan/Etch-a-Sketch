//select grid
const grid = document.querySelector('.grid');

function getSingleUnit () {
    //create a div
    const div = document.createElement('div');
    //put attribute in div
    div.classList.add('unit');
    //add div in grid
    grid.appendChild(div);
}

function getFixMountUnit (e) {
    //remove previous result
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    //get number of boxes
    const num = +e.target.getAttribute('id');
    //add style in grid
    grid.style.height = grid.style.width = `${num * 10+ num}px`;

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            getSingleUnit();
        }
    }

    ;
    
}

//add event on grid

document.getElementById('16').addEventListener('click', getFixMountUnit);
document.getElementById('32').addEventListener('click', getFixMountUnit);
document.getElementById('64').addEventListener('click', getFixMountUnit);