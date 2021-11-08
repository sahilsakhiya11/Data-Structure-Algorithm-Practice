function Palindrome (str) {
    str.split('').every((char, index) => {
        char === str[str.length - index - 1] ? console.log(`${str} is Palindrome `  + true) : console.log(`${str} is not Palindrome ` + false)
    })
}

Palindrome("abba")
Palindrome("Sahil")