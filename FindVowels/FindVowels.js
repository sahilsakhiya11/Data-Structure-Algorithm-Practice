// Problem 8 :-
// Statement:- Write a function that takes string as an arguments
// and returns number of vowels in the string
// eg. Hi there => 3

const inputString = "Hi there";

const findVowels = (input) => {
    const vowes = "aeiou"
    let count = 0
    for(let char of input.toLowerCase()){
        if(vowes.includes(char)){
            count++
        }
    }
    console.log(count)
}

findVowels(inputString)


// Solution 2:-
// Using Regular Expression

const input = "Sahil";

const solution2 = (str) => {
    const matchArray = str.match(/[aeiou]/gi);
    console.log(matchArray ? matchArray.length : 0)
}
solution2(input)
