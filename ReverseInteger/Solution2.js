function reverseInteger(input){
    let inputString = input.toString();
    let resultString = '';

    for(let char of inputString){
        resultString = char + resultString;
    }
    const result = parseInt(resultString);
    resultString > 0 ? console.log(`Reverse Integer is ${result}`) : console.log(`Reverse Integer is -${result}`)
}
reverseInteger(123)
reverseInteger(-23)
reverseInteger(400)
