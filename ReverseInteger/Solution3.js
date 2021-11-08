// used Built in method of javascript called as Math.sign() which returns 1(Positive), 0, -1(Negative) 

function reverseInteger(input){
    let result = parseInt(input.toString().split('').reverse().join('')) * Math.sign(input)
    console.log(result)
}

reverseInteger(123)
reverseInteger(-23)
reverseInteger(-230)
reverseInteger(400)