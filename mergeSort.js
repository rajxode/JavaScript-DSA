const arr = [9,3,5,6,4,8,1,2,7];

const merge = (low,mid,high) => {
    let i = low;
    let j = mid+1;
    let k = 0;
    let result = [];
    while (i<=mid && j<=high) {
        if(arr[i] < arr[j]) {
            result[k] = arr[i];
            i++;
            k++;
        } else if(arr[j] < arr[i]) {
            result[k] = arr[j];
            j++;
            k++;
        } else {
            result[k] = arr[i];
            result[k+1] = arr[i];
            i++;
            j++;
            k+=2;
        }
    }
    while(i<=mid) {
        result[k] = arr[i];
        i++;
        k++;
    }
    
    while(j<=high) {
        result[k] = arr[j];
        j++;
        k++;
    }
    i=low;
    k=0;
    while(k<=result.length && i<=high) {
        arr[i] = result[k];
        i++;k++;
    }
}

const mergeSort = (low, high) => {
    if(low >= high) {
        return;
    }
    const mid = Math.floor((low + high)/2);
    mergeSort(low,mid);
    mergeSort(mid+1,high);
    merge(low,mid,high);
}

mergeSort(0,arr.length-1);
console.log(arr);