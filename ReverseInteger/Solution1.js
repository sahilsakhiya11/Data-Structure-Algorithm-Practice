// Question:- Reverse the Integer
// Example:- 51 => 15
//             -34 => -43
//              500 => 5
//             -90 => -9

function reverseInteger(input){
    let string = input.toString();
 let array = string.split('').reverse();
 let reverseString = array.join('');
 let result = parseInt(reverseString)
 reverseString > 0 ? console.log(`Revesre Integer ` +result) : console.log(`Reverse Integer is -${result}`)

}

reverseInteger(123)
reverseInteger(-23)
reverseInteger(400)