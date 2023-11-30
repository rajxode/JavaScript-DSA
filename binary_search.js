
// function for binary search (Recursion)
// array, start index , ending index , element to find
const binarySearch = (arr,start,end,find) => {

    // if the starting index is greater than the ending index element is not present
    if( start > end ){
        // show message and return
        console.log('not found');
        return;
    }
  
    // middle element of array
    const mid = Math.floor((start + end) / 2);

    // if the middle element is equal to element to be find, show index and return
    if(arr[mid] === find){
        console.log('found at:',mid);
        return;
    }
    // if the middle element is smaller than the number to be found
    else if(arr[mid] < find){
        // call function again and change the starting index to next element of mid
        binarySearch(arr,mid+1,end,find);
    }
    // else the middle element is greater than the number to be found
    else{
        // call function again and change the ending index to previous of middle element
        binarySearch(arr,start,mid-1,find);
    }
}

// array
const arr = [1,2,3,4,5];

// function call
// start = 0 , end = length - 1, find = 2 
binarySearch(arr,0,arr.length-1,2);
