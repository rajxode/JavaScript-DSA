const num = 5;

// first pattern
// *
// **
// ***
// ****
// *****

for(let i=0; i<num; i++) {
    let str = '';
    for(let j=0; j<=i; j++) {
        str = str + '*';
    }
    console.log(str);
}

// reverse
// *****
// ****
// ***
// **
// *
for(let i=0; i<num; i++) {
    let str = '';
    for(let j=0; j<num-i; j++) {
        str = str + '*';
    }
    console.log(str);
}

// pyramid pattern 1
//      *
//     **
//    ***
//   ****
//  *****
for(let i=0; i<num; i++) {
    let str = '';
    for(let j=0; j<num-i; j++) {
        str = str + ' ';
    }
    for(let k=0; k<=i; k++){
        str = str + '*'
    }
    console.log(str);
}

// reverse pyramid 1
// *****
//  ****
//   ***
//    **
//     *
for(let i=0; i<num; i++) {
    let str = '';
    for(let j=0; j<i; j++) {
        str = str + ' ';
    }
    for(let k=0; k<num-i; k++){
        str = str + '*'
    }
    console.log(str);
}

// hollow pyramid 1
//      *
//     **
//    * *
//   *  *
//  *****
for(let i=0; i<num; i++) {
    let str = '';
    for(let j=0; j<num-i; j++) {
        str = str + ' ';
    }
    for(let k=0; k<=i; k++){
        if( k=== 0 || k===i || i === num-1) {
            str = str + '*';
        } else {
            str = str + ' ';
        }
    }
    console.log(str);
}

// pyramid pattern 2
//      *
//     ***
//    *****
//   *******
//  *********
for(let i=0; i<num; i++) {
    let str = '';
    for(let j=0; j<num-i; j++) {
        str = str + ' ';
    }
    for(let k=0; k<=i; k++){
        str = str + '*'
    }
    for(let m=0; m<i; m++) {
        str = str + '*';
    }
    console.log(str);
}

// reverse pyramid pattern 2
// *********
//  *******
//   *****
//    ***
//     *
for(let i=0; i<num; i++) {
    let str = '';
    for(let j=0; j<i;j++){
        str = str + ' ';
    }
    for(let k=0;k<num-i;k++){
        str = str + '*';
    }
    for(let k=0;k<num-i-1;k++){
        str = str + '*';
    }
    console.log(str);
}

// hollow pyramid pattern 2
//      *
//     * *
//    *   *
//   *     *
//  *********
for(let i=0; i<num; i++) {
    let str = '';
    for(let j=0; j<num-i; j++) {
        str = str + ' ';
    }
    for(let k=0; k<=i; k++){
        if(k===0 || i === num-1 ){
            str = str + '*';
        } else {
            str = str + ' ';
        }
        
    }
    for(let m=0; m<i; m++) {
        if( i === num-1 || m === i-1 ) {
            str = str + '*';
        } else {
            str = str + ' ';
        }
    }
    console.log(str);
}