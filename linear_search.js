
// array
const arr = [5,9,7,8,1,6,3,4,2];

// element to search
const find = 8;

// linear search method

const linearSearch = (arr,find) => {
    for(let i = 0; i < arr.length; i++){
        // if element found
        if(arr[i] === find){
            // return the index
            return i;
        }
    }
    // if element not found
    return -1;
}


// calling the function
const result = linearSearch(arr,find);

// if result is -1
if(result === -1 ){
    // element not found
    console.log('Not found');
} else {
    // print the index of element
    console.log('Found at:',result + 1);
}

