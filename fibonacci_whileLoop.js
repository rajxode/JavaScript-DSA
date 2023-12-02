
// function to print first to nth fibonacci series
const printFib = ( num ) => {

  // zeroth element not exists
    if(num <= 0){
        console.log('Wrong input');
        return;
    }

  // print just the first element of series
    if(num === 1){
        console.log(0);
        return;
    }

  // print first and second element of series
    console.log(0);
    console.log(1)

  // variables to print series
    let first = 0;
    let second = 1;
  // index of series
    let index = 0;

  // loop to print all elements
    while(index < num-2 ){
      // next element 
        let third = first + second;
      // update first and second element
        first = second;
        second = third;
      // print the third element
        console.log(third);
      // increase the index
        index++;
    }
    // return
    return;
}

// call function
printFib(5)
