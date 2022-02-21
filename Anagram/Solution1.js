// Problem 5:- Anagram
// Statement:- Check to see if both string that function takes are anagrams or not
// Conside two string and if both string has same number of characters without spaces
// and punctuation and as well as both string has equal number of each individual character
//eg. ("rail safety", "failry tales") => True
// here both has equal number of character and
// equal number of individual character, both considering captial as lower case
// eg. ("Hi there", "Bye there") => False

const string1 = "Hi THERE";
const string2 = "Bye There";

const anagram = (input1, input2) => {
  // Step 1:- Remove Spaces and Special Characters and convert string to lowercase
  const st1 = input1.replace(/[^A-Z0-9]+/gi, "").toLowerCase();
  const st2 = input2.replace(/[^A-Z0-9]+/gi, "").toLowerCase();

  // Step 2:- Convert both string into individual objects and count the character occurance
  // Step 2(a):- Convert First String in to object with Occurance as value

  let obj1 = {};
  let count1 = 0;

  for (let char of st1) {
    obj1[char] = !obj1[char] ? (count1 = 1) : (count1 += 1);
  }

  // Step 2(b):- Convert Second String in to object with Occurance as value

  let obj2 = {};
  let count2 = 0;

  for (let char of st2) {
    obj2[char] = !obj2[char] ? (count2 = 1) : (count2 += 1);
  }

  // Step 3:- Count keys in both object
  // Step 3 a:- Keys count for object 1
  let keyObj1 = 0;

  for (let key1 in obj1) {
    keyObj1++;
  }

  // Step 3 b:- Keys count for object 1
  let keyObj2 = 0;

  for (let key2 in obj2) {
    keyObj2++;
  }

  // Step 4:- Compare key and value between two objects
  if (keyObj1 === keyObj2) {
    for (let char in obj1) {
      if (char[obj1] === char[obj2]) {
        console.log("Both String is anagram");
      } else {
        console.log("Both String is not anagram");
      }
    }
  } else {
      console.log("Not anagram")
  }
};

anagram(string1, string2);
