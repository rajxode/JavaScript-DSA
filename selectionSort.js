
// function to perform selection sort on array
const selectionSort = (arr) => {
    // size of array
    const size = arr.length;
    
    // map over each element
    for( let i = 0; i < size - 1; i++){
        for(let j = i+1; j < size; j++){
            // compare all the elements with the first element 
            // if any element is small, then swap
            if(arr[i] > arr[j]){
                // swapping element
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// dummy array
const arr = [1,5,3,9,2,8,6,4,7];
// function call 
selectionSort(arr);
// output
console.log(arr);
