// array one
const arr1 = [1,3,5,7,9,11,13,15];
// array two
const arr2 = [2,4,6,8,10];
// result array
const result = [];

let i=0, j=0;
// merge both array in result
while(i<arr1.length && j<arr2.length) {
    if(arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
    } else if( arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
    } else {
        result.push(arr1[i]);
        result.push(arr2[j]);
        i++;
        j++;
    }
}
// copy remaining elements of array1 if there are
while(i<arr1.length) {
    result.push(arr1[i]);
    i++;
}
// copy remaining elements of array2 if there are
while(j<arr2.length) {
    result.push(arr2[j]);
    j++;
}

// print result
console.log(result);