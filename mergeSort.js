function merge (arr1, arr2) {
    let i = j = resIndex = 0;
    let result = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result[resIndex++] = arr1[i++];
        } else {
            result[resIndex++] = arr2[j++];
        }
    }

    while(i < arr1.length) {
        result[resIndex++] = arr1[i++];
    }

    while(j < arr2.length) {
        result[resIndex++] = arr2[j++];
    }

    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    let middle  = Math.floor((0 + arr.length -1)/2);
    let leftArr = arr.slice(0, middle + 1);
    let rightArr = arr.slice(middle + 1);

    let arrLeft = mergeSort(leftArr);
    let arrRight = mergeSort(rightArr);

    return merge(arrLeft, arrRight);
}

console.log(mergeSort([4,3,45,67,6,13]));

