
// Reverse a string using for loop

const str = 'abcd';
// to store the reverse string
var revStr = '';

// looping over each element in reverse order
for(let i = str.length - 1; i >= 0; i-- ){
    // add the character of str into revStr
    revStr = revStr + str[i];
}

// show the reverse string
console.log('Reverse String: ', revStr);


// Reverse string using inbuilt methods

// convert the string into an array
const splitStr = str.split('');

// reverse the array 
const revSplitStr = splitStr.reverse();

// join the array into string again
const revStr2 = revSplitStr.join('');

// show the reverse string
console.log('Reverse String ( 2nd method ): ',revStr2);
