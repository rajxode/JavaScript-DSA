
// function to sort an array using Bubble Sort
const bubbleSort = (arr) => {
    // size of array
    const size = arr.length;

    // loop over each element
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size - i -1; j++){
            // compare two consecutive elements of array
            // swap the elements if the element at 'j' position is greater than the element at 'j+1'
            if(arr[j] > arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// array
const arr = [1,7,3,8,2,9,6];
// call function
bubbleSort(arr);
// show output
console.log(arr);
