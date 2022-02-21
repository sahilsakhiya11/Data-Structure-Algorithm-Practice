// Problem 3:- FizzBuzz Problem
// Statement:- Take number from the user and print the numbers,
// If my number is divided by 3 then print "fizz" and
// If my number is divided by 5 then print "buzz" and
// if number is divided by both(3,5) then print fizzbuzz

const fizbuzz = (input) => {
  for (let i = 1; i <= input; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i / 3 === 1) {
      console.log("fizz");
    } else if (i / 5 === 1) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizbuzz(25);
