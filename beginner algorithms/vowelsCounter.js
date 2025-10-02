// Counting the Vowels in a String of Text

/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

/*
 An iterative approach to counting the number of vowels in a string of text.
 */

// initialize counter
// loop through text to test if each character is a vowel - includes()
// return num of vowels
const Vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {
    let counter = 0

    for (let letter of text.toLowercase()){
        if (vowelsCounter.includes(letter)){
            counter++
        }
    }
    return counter
}