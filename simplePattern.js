
// Number pattern 
// 1
// 12
// 123
// 1234
// 12345
const num = 5;
for( let i = 0; i < num ; i++ ) {
    let str = "";
    for( let j=0; j<= i; j++) {
        str = str + (j+1);
    }
    console.log(str);
}


// Reverse number pattern 
// 12345
// 1234
// 123
// 12
// 1
for( let i = 0; i < num ; i++ ) {
    let str = "";
    for( let j=0; j <num-i; j++) {
        str = str + (j + 1);
    }
    console.log(str);
}

// Alphabet pattern (using ascii char codes)
// A
// AB
// ABC
// ABCD
// ABCDE
for( let i = 0; i < num ; i++ ) {
    let str = "";
    for( let j=0; j<= i; j++) {
        str = str + String.fromCharCode( 64 + j + 1 );
    }
    console.log(str);
}

// Alphabet pattern 
// ABCDE
// ABCD
// ABC
// AB
// A
for( let i = 0; i < num ; i++ ) {
    let str = "";
    for( let j=0; j < num - i; j++) {
        str = str + String.fromCharCode( 64 + j + 1 );
    }
    console.log(str);
}

// Number pattern
// 55555
// 45555
// 34555
// 23455
// 12345
for( let i = 0; i < num ; i++ ) {
    let k = num - i;
    let str = "";
    for( let j=0; j < num; j++) {
        if( j < i ){
            str = str + (k++);
        } else {
            str = str + num;
        }
        
    }
    console.log(str);
}

