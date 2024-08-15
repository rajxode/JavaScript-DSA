
const arr = [10,80,30,90,40,50,70];

// helper function for making partitions
const quickHelp = (low, high) => {
    // consider first element as pivot element
    const pivot = arr[low];
    let i = low;
    let j = high;
    while(i<j) {
        while( (arr[i]<=pivot) && i < high ) {
            i++;
        }
        while((arr[j] > pivot) && j > low) {
            j--;
        }
        if(i<=j) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    const temp = arr[j]
    arr[j] = pivot;
    arr[low] = temp;
    return j;
}

// quickSort 
const quickSort = (low, high) => {
    if(low >= high) {
        return;
    }
    const j = quickHelp(low, high);
    // recursive quickSort on partitions
    quickSort(low, j-1);
    quickSort(j+1, high);
}

quickSort(0,arr.length-1);
console.log(arr);