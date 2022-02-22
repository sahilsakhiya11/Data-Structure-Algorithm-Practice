// Problem 7
// Statement:- Write a function that takes number as argument and
// form a pyramid according to that with space on the right hand side.
// eg. number 3 number 4
//   '#  '      '#   '
//   '## '      '##  '
//   '###'      '### '
//              '####'
const inputNumber = 4;
const steps = (input) => {
  if (typeof input !== "number") {
    console.log("input is not number");
  } else {
    // Step 1:- Iterate through row

    for (let row = 0; row < input; row++) {
      let stair = "";
      // Step 2:-  Iterate through column
      for (let column = 0; column < input; column++) {
        if(column<=row){
          stair += '#'
        } else {
          stair += ' '
        }
      }
      console.log(stair)
    }
  }
};

steps(inputNumber);
