const container = document.querySelector('.container');

const arr = [];
let gridSize = 64;

for (let i = 0; i < gridSize; i++){
  const arr1 = [];
  for (let j = 0; j < gridSize; j++){
    arr1[j] = document.createElement('div');
    arr1[j].classList.add('grid');
    container.appendChild(arr1[j]);
    let height = 50/gridSize;
    console.log(height);
    arr1[j].style.cssText = `height: ${height}vh; width: ${height}vh;`;
  }
  arr[i] = arr1;
}
