// https://www.codingame.com/ide/puzzle/there-is-no-spoon-episode-1


let width = 2
let height = 2
let lines = [ '00', '0.' ];
// console.log('0 0 1 0 0 1');


let main =(width, height, lines)=> {
  let grid = createGrid(width, height, lines);
  let neighbors = findNeighbors(grid);
  console.log(neighbors)
}

let createGrid = (width, height, lines)=> {
  let arr = [];
  lines.forEach(line =>{
    let line_split = line.split('');
    arr.push(line_split)
  });
  return arr;
};

let findNeighbors = (grid) => {
  let neighbors = [];

  for (let i = 0; i < grid.length; i++) {
    let line = grid[i];
    for (let y = 0; y < line.length; y++){
      let point = {x: '', y: ''};
      let contain = line[y];
      let obj = {cell: {x: y, y: i}, right: {x: '', y: ''}, bottom: {x: '', y: ''}, contain: contain};
      obj.right = findRight(i, y, grid);

      console.log(line, ', cell ', cell, ', i - ', i, ', y - ', y)
      console.log(obj)
    }
  }
};

let findRight = (i, y, grid) =>{
  let point = {x: '', y: ''};
};

let result = main(width, height, lines);
// console.log(result)
