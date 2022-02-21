// Problem 4 :- ArrayChunk
// Problem Statement:- Function takes two argument 1. Array and 2. Size
// you should divide array into subarray of size.
// ex. ([1,2,3,4,5,6],2) => [1,2,3], [4,5,6]
// ex. ([1,2,3,4,5,6], 4) => [1,2,3,4], [5,6]

const arrayChunking = (arrayInput, size) => {
    const chunked = []
    let index = 0;

    while(index < arrayInput.length){
        chunked.push(arrayInput.slice(index, index + size))
        index += size
    }
    console.log(chunked)
}
arrayChunking([1,2,3,4], 3)