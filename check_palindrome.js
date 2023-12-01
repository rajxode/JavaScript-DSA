
// a string 
const str = 'abcba';

// function to reverse a given string
const reverseString = (str) => {
  // convert string into an array
    const splitStr = str.split('');
// reverse array
    const revSplit = splitStr.reverse();
// convert array into string
    const revStr = revSplit.join('');

// return reverse string
    return revStr;
}

// check if string is palindrome
const checkPalindrome = (str) => {

// reverse the string
    const revStr = reverseString(str);

// compare the string
    if(revStr === str){
// show output
        console.log('Palindrome');
    }
    else{
        console.log('Not a Palindrome');
    }
}

// function call
checkPalindrome(str);
