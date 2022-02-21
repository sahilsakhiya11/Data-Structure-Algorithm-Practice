// Problem 6
// Write a function that accepts String and Capitalize first letter of every word
// eg. my name is sahil => My Name IS Sahil

const string1 = "my name is sahil";
const capitalizeString = (string1) => {
  // Step 1:- Convert string into array but split it here with space
  const input = string1.split(" ");

  // Step 2:- Take every element of array and convert into capitalize
  const data = input.map((content) => {
      return content.charAt(0).toUpperCase() + content.slice(1)
  });
  
  console.log(data.join(" "))
};

capitalizeString(string1);
