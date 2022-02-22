// Problem :-  Spiral Matrix Problem
// Statement:- Write a function that takes number as input and
// Print out Spiral Matrix

const spiralMatrix = (number) => {
  // 1. Create an empty array to store subarrays
  const result = [];
  //2. count subaraay and push it into result array
  for (let i = 0; i < number; i++) {
    result.push([]);
  }

  // 3. Create counter variable and start row, col and end row, col
  let counter = 1;
  let startCol = 0;
  let endCol = number - 1;
  let startRow = 0;
  let endRow = number - 1;

  while (startRow <= endRow && startCol <= endCol) {
    
    // 4. Top Row
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++

    // end Column
    for(let i = startRow; i<=endRow; i++){
        result[i][endCol] = counter;
        counter++
    }
    endCol--;
    // bottom row
    for(let i = endCol; i>= startCol; i--){
        result[endRow][i] = counter;
        counter++
    }
    endRow--;
    //left row
    for(let i = endRow; i>= startRow; i--){
        result[i][startCol] = counter;
        counter++
    }
    startCol++;

  }
  console.log(result)
  
};

spiralMatrix(3);
