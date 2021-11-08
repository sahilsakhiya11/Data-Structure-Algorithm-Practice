function Palindrome(str){
    console.log(`INPUT STRING => ${str}`);
    let result = '';
    for(char of str){
        result = char + result;
    }
    console.log(`REVERSED STRING => ${result}`)
    str === result ? console.log("String is Palindrome " + true) : console.log("String is not Palindrome " +false)
}

Palindrome("abba");
Palindrome("Sahil")