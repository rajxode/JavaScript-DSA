
// array
const arr = [1,2,3,4,5,6,7,8];

// function
const binarySearch = (arr,start,end,find) => {
    while( start <= end ){
        const mid = Math.floor((start + end) / 2);
        
        if(arr[mid] === find){
            return mid;
        }
        else if(arr[mid] > find){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    
    return -1;
}

// function call
const result = binarySearch(arr,0,arr.length,5);

// show output
if(result === -1){
    console.log('Element not found');
}
else{
    console.log('Found at :', result + 1);
}
