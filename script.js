//select grid
const grid = document.querySelector('.grid');

//generate a unit
function getSingleUnit() {

    //create a div
    const div = document.createElement('div');

    //put attribute in div
    div.classList.add('unit');

    //add div in grid
    grid.appendChild(div);
}

function getPaint(e) {
    e.target.style.backgroundColor = 'black';
}

//generate the grid
function getFixMountUnit(e) {

    //remove previous result
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    //get number of boxes
    const num = +e.target.getAttribute('id');

    //add style in grid
    grid.style.height = grid.style.width = `${num * 10 + num}px`;

    //generate num**2 pieces of boxes
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            getSingleUnit();
        }
    }

    //select all units
    const units = document.querySelectorAll('.unit');
    //add style
    units.forEach((unit) => {
        unit.addEventListener('mouseover', getPaint);
    });
}

document.getElementById('16').addEventListener('click', getFixMountUnit);
document.getElementById('32').addEventListener('click', getFixMountUnit);
document.getElementById('64').addEventListener('click', getFixMountUnit);

