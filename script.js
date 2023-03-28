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
    e.target.style.backgroundColor = 'red';
}

//generate the grid
function getFixMountUnit(e) {

    //remove previous result
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    //get number of boxes
    let num;
    if (e.target.getAttribute('id') == 'custom') {
        num = +prompt("Please enter a number:");
    } else {
        num = +e.target.getAttribute('id');
    }

    //generate num**2 pieces of boxes
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            getSingleUnit();
        }
    }

    //select all units
    const units = document.querySelectorAll('.unit');
    //add style,怎样才能按下并移动才上色，松开不上色
    units.forEach((unit) => {
            //how big of each box
            //( 600 - num - 1) / num 应该更好，可是出现了粗线条，为什么呢？
            unit.style.height = unit.style.width = `${( 600 / num ) - 1}px`;
            //painting
            unit.addEventListener('mousemove', getPaint);
    });
}

document.getElementById('custom').addEventListener('click', getFixMountUnit);
document.getElementById('16').addEventListener('click', getFixMountUnit);
document.getElementById('32').addEventListener('click', getFixMountUnit);
document.getElementById('64').addEventListener('click', getFixMountUnit);
document.getElementById('128').addEventListener('click', getFixMountUnit);

