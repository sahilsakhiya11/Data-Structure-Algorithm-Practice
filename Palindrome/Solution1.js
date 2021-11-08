function Palindrome(str){
    console.log(`INPUT STRING => ${str}`);
    const array = str.split('').reverse();
    const result = array.join('');
    console.log(`REVERSED STRING => ${result}`)
    str === result ? console.log("String is Palindrome " + true) : console.log("String is not Palindrome " +false)
}

Palindrome("abba");
Palindrome("Sahil")