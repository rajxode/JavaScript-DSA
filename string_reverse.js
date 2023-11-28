
// Reverse a string using for loop

const str = 'abcd';
var revStr = '';

for(let i = str.length - 1; i >= 0; i-- ){
    revStr = revStr + str[i];
}

console.log('Reverse String: ', revStr);


// Reverse string using inbuilt methods

const splitStr = str.split('');

const revSplitStr = splitStr.reverse();

const revStr2 = revSplitStr.join('');

console.log('Reverse String ( 2nd method ): ',revStr2);
