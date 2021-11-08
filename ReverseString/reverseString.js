// Question:-  Given a String and get a reverse String as output
// 1. Apple => elppA

const a = "Sahil"

function reverseString(str){
    const array = a.split('');
    const reversedString = array.reverse().join('');
    console.log("Final ReversedString:- " +reversedString);

}

reverseString();