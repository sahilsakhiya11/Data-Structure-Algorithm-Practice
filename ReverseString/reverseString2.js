// Question:-  Given a String and get a reverse String as output
// 1. Apple => elppA
// with for loop

function reverseString(str){
    let reversedString = '';

    for(let char of str){
        reversedString = char + reversedString;
    }
    console.log(reversedString)
    ;
    
}

reverseString("Sahil")