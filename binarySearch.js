function binarySearch(arr, num) {
    
    console.log(num);
    let left = 0;
    let right = arr.length - 1;
    let middle;

     do {
        middle = Math.floor((left + right)/2);
        console.log(left, right, middle);
        if(arr[middle] === num) {
            return middle;
        } else if(num > arr[middle]) {
            left = middle + 1;
        } else  {
            right = middle - 1;
        }
    } while(left <= right)

    return -1;
}

let res = binarySearch([3,2,4,5], 5);

console.log(res)