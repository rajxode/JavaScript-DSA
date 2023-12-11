// apply insertion sort on an array

// function
const insertionSort = (arr) => {
  // size of array 
  const size = arr.length;

  // map over each element 
    for(let i = 1; i < size; i++){
      // index of minimum value
        let min = i;
        for(let j = i-1; j >= 0; j--){
          // compare with minimum element
            if(arr[j] > arr[min]){
              // if there is any greater element on left side, then swap and update the minimum element index
                const temp = arr[j];
                arr[j] = arr[min];
                arr[min] = temp;
                // update index
                min = j;
            }
        }
    }
}

// array
const arr = [6,2,7,4,9,5];
// function call
insertionSort(arr);

// output
console.log(arr);
