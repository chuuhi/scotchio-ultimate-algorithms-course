// String Reversal

/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// method 1 - chaining in-built methods

// split() splits string into array of characters
// reverse() reverses order of elements in array
// join() combines elements in array into string
function reverseString(text) {
    return text.split('').reverse().join('')
}

// method 2 - the for-loop way

// use decrementing for loop to run through string and append each character to variable in reverse order
// start backwards in loop- initialize iterating variable to last index - add each index to variable

function reverseString(text){
    let result = ''

    for (let i = text.length - 1; i >= 0; i--){
        result += text[i]
    }
    return result
}

// use for...of syntax from es6
// string is iterable object, append char to front of existing string
// add the character to the beginning each time- will build the word in reverse
function reverseString(text){
    let result = ''

    for (let char of text){
        result = char + result
    }
    return result
}

// method 3 - the recursive way ?!

// reduce problem into smaller instances of same problem
// substr() return a portion of text received- 2 parameters- start of index and num of chars after
// terminal case at start- if no text- stop the function- return empty string
// function breaks down problem into smaller chunks until terminating condition met
// continuously remove and return first character on each call and re-execute the function on what is left, from last call upwards

function reverseString(text){
    if (text === ''){
        return ''
        }else{
            return reverseString(text.substr(1) + text[0])
        }
}

// how it works:
// 1	reverseString(‘code’)	‘c’
// 2	reverseString(‘ode’)	‘o’
// 3	reverseString(‘de’)	‘d’
// 4	reverseString(‘e’)	‘e’
// END	reverseString(‘’)	“”

// method 4 - reduce()

// goes through array and does the same thing to each element to reduce array to single value
// each time iterate through characters- add that character to start of acculmulator- start with empty string as initial value

function reverseString(text){
    return text.split('').reduce((acc, char) => char + acc, '')
}

// test cases
test('reverseString is a function', () => {
    expect(typeof reverseString).toEqual('function');
  });
  
  test('reverses a string of text', () => {
    expect(reverseString('aeiou')).toEqual('uoiea');
  });
  
  test('reverses a string containing numbers', () => {
    expect(reverseString('123456789')).toEqual('987654321');
  });
  
  test('reverses a string containing mixed case characters', () => {
    expect(reverseString('AsDfGhJkL')).toEqual('LkJhGfDsA');
  });

// according to scotch.io website: 
// fastest solution: reduce(), for loop, recursion, chaining methods was slowest

// if testing properly the chain methods should be fastest solution! 