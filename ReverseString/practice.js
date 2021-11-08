function reverse(str){
    const array = str.split('');
    const result = array.reverse().join('');
    console.log(result)
}

function reverse2(str){
    result =''
    for(let char of str){
        result = char + result;
    }
    console.log(result)
}

reverse("sahil");
reverse2("patel")