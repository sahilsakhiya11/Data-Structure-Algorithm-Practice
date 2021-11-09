// Given a String and return the character with 
// most frequency

//First converted string into object and loop through the object and get the maximum

function maxChars(str){
    let object = {}
    let max = 0;
    let character = ''

    for (let char of str){
        (!object[char])? object[char] = 1 : object[char] ++
    }
    console.log(object)

    for(let char in object){
        if(object[char] > 0 ){ 
            max = object[char] 
            character = char
        }
    }
    console.log(`Maximum Character ${character} and occured ${max}`)
}

maxChars("Saahilll")