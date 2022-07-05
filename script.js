const container = document.querySelector('.container');

let drag = false
document.body.onmousedown = () => (drag = true);
document.body.onmouseup = () => (drag = false);

let gridSize = 16;
setGrid();
let squares = document.querySelectorAll('.grid');
squareDrawing();

//Sets the empty grid
function setGrid(){
  container.innerHTML = '';

  for (let i = 0; i < gridSize; i++){
    for (let j = 0; j < gridSize; j++){
      const s = document.createElement('div');
      s.classList.add('grid');
      container.appendChild(s);
      let height = 58/gridSize;
      s.style.cssText = `height: ${height}vh; width: ${height}vh;`;
    } 
  }
}


//slider stuff to reset grid
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = "Size: " + slider.value.toString(); // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = "Size: " + slider.value.toString();
  gridSize = slider.value;
  setGrid();
  squares = document.querySelectorAll('.grid');
  squareDrawing();
}


//random value from 0-255
function rgb() {
  return Math.floor(Math.random() * 256);
}


//buttons
const draw = document.querySelector('#draw');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
let state = 'draw';

draw.classList.add('clicked');

draw.addEventListener('click', () => {
  draw.classList.add('clicked');
  rainbow.classList.remove('clicked');
  eraser.classList.remove('clicked');
  state = 'draw';
});

rainbow.addEventListener('click', () => {
  rainbow.classList.add('clicked');
  eraser.classList.remove('clicked');
  draw.classList.remove('clicked');
  state = 'rainbow';
});

eraser.addEventListener('click', () => {
  eraser.classList.add('clicked');
  rainbow.classList.remove('clicked');
  draw.classList.remove('clicked');
  state = 'eraser';
});

clear.addEventListener('click', () => {
  squares.forEach((square) =>  {
    square.style.backgroundColor = 'white';
  });
});


//drawing
function squareDrawing(){
  squares.forEach((square) =>  {
    square.addEventListener('mouseover', colour);
    square.addEventListener('mousedown', colour);
  });
}

function colour(e){
  e.preventDefault();
  if (state == 'draw' && (drag || e.type == 'mousedown')){
    e.target.style.backgroundColor = 'black';
  } else if(state == 'rainbow' && (drag || e.type == 'mousedown')){
    e.target.style.backgroundColor = `rgb(${rgb()},${rgb()},${rgb()})`;
  } else if(state == 'eraser' && (drag || e.type == 'mousedown')){
    e.target.style.backgroundColor = 'white';
  }
}