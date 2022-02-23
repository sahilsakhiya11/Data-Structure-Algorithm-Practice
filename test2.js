// Problem 1:- String Reversal

const reverseString = (str) => console.log(str.split("").reverse().join(""));

const reverseString2 = (str) => {
  let reverseString = "";

  for (let i = 0; i <= str.length - 1; i++) {
    reverseString = str[i] + reverseString;
  }

  console.log(reverseString);
};

const reverseString3 = (str) => {
  let out = "";
  for (let char of str) {
    out = char + out;
  }

  console.log(out);
};

reverseString3("sahil");

// Problem 2:- Pallindrome

const pallindrom = (str) => {
  const out = str.split("").reverse().join("");

  str === out
    ? console.log("String is Pallindrome")
    : console.log("String is not pallindrome");
};

const pallindrom2 = (str) => {
  let reverse = "";

  for (let i = 0; i <= str.length - 1; i++) {
    reverse = str[i] + reverse;
  }

  str === reverse
    ? console.log("String is Pallindrome")
    : console.log("String is not Pallindrome");
};

const pallindrom3 = (str) => {
  let reverseString = "";

  for (let char of str) {
    reverseString = char + reverseString;
  }

  str === reverseString
    ? console.log("String is Pallindrome")
    : console.log("String is not Pallindrome");
};

pallindrom3("Sahil");

// Problem: - Integer Reversal

const integerReversal = (num) => {
  const str = num.toString();
  const out = parseInt(str.split("").reverse().join(""));

  const reverseOut = out * Math.sign(num);
  num === reverseOut
    ? console.log("Number is Pallindrome")
    : console.log("Number is not pallindrome");
};

integerReversal(-121);

// Problem MaxChars

const maxChars = (str) => {
  console.log(str);
  let obj = {};
  let count = 0;
  let max = 0;
  let maxChar = 0;

  for (let char of str) {
    obj[char] = !obj[char] ? (count = 1) : (count = count + 1);

    if (obj[char] > max) {
      maxChar = char;
      max = obj[char];
    }
  }

  console.log(max, maxChar);
};

maxChars("sahilpatelss");

// Problem = FizzBuzz

const fizzbuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("buzz3");
    } else if (i % 5 === 0) {
      console.log("fizz5");
    } else {
      console.log(i);
    }
  }
};

fizzbuzz(3);

// Problem Array Chunking

const arrayChunking = (arr, size) => {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index = index + size;
  }

  console.log(chunked);
};

arrayChunking([1, 2, 3, 4, 5, 6], 4);

// Anagram

const anagram = (str1, str2) => {
  //1. remove special characters and spaces
  const input1 = str1.toLowerCase().replace(/\s/g, "");
  const input2 = str2.toLowerCase().replace(/\s/g, "");

  // convert into object and count the occurance
  let obj1 = {};
  let count1 = 0;
  let key1 = 0;
  for (let char of input1) {
    obj1[char] = !obj1[char] ? (count1 = 1) : (count1 = count1 + 1);
  }

  let obj2 = {};
  let key2 = 0;
  let count2 = 0;
  for (let char of input2) {
    obj2[char] = !obj2[char] ? (count2 = 1) : (count2 = count2 + 1);
  }

  for (let countKey in obj1) {
    key1++;
  }
  for (let countKey in obj2) {
    key2++;
  }

  if (key1 === key2) {
    for (let char in obj1) {
      if (obj1[char] === obj2[char]) {
        console.log("Both Anagram");
      } else {
        console.log("Both Not anagram");
      }
    }
  } else {
    console.log("exit");
  }
};

anagram("rail safety", "failry tales");

// Problem:- Sentence Capitalization

const capitalization = (sentence) => {
  const arr = sentence.split(" ");
  const data = arr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  console.log(data.join(" "));
};

capitalization("This is Sahil Patel");

// Find Number of Vowels

const countVowels = (str) => {
  const vowelString = "aeiou";
  const input = str.toLowerCase();
  let count = 0;

  for (let char of input) {
    if (vowelString.includes(char)) {
      count = count + 1;
    }
  }
  console.log(count);
};

countVowels("aeious");

// Problem SpiralMatrix

const spiralMatrix = (number) => {
  const output = [];

  for (let i = 1; i <= number; i++) {
    output.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let startColumn = 0;
  let endRow = number - 1;
  let endColumn = number - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    //Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      output[startRow][i] = counter * counter;
      counter++;
    }
    startRow++;

    //Right Column
    for (let i = startRow; i <= endRow; i++) {
      output[i][endColumn] = counter * counter;
      counter++;
    }
    endColumn--;

    //Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      output[endRow][i] = counter * counter;
      counter++;
    }
    endRow--;
    //left columns

    for (let i = endRow; i >= startRow; i--) {
      output[i][startColumn] = counter * counter;
      counter++;
    }
    startColumn++;
  }
  console.log(output);
};

spiralMatrix(3);

// Problem = Convert String to Dictionary

const convertString = (str) => {
  let obj = {};
  let key = 0;
  for (let char of str) {
    obj[key] = char;
    key++;
  }
  console.log(obj);
};
convertString("sahil");

//Convert Dictionary to String

const data = [
  { id: "1", name: "sahil" },
  { id: "2", name: "patel" },
];

const convertObject = (obj) => {
  let name = "";

  for (let char in obj) {
    name += obj[char].name;
    console.log(`${JSON.stringify(obj[char].id)} => ${JSON.stringify(obj[char].name)}`);
  }

  console.log(name);
};

convertObject(data);
