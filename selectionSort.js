function swap(arr, i, j) {
    let temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(arr = []) {
    for(let i = 0, len = arr.length; i < len; i++) {
        let min = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i != min) {
            swap(arr, i, min);
        }
    }

    return arr;
}

console.log(selectionSort([2,1,56,2,9]))