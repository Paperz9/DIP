// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

function bubbleSort(array) {
    let result = array;
    for (let i = result.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                result[j] = result[j+1];
                result[j+1] = temp;
            }
        }
    }
    return result;
}

console.log(bubbleSort(list)); // => 0,1,2,4,7,8,9,13,16

// opgave1.3.js

function binarySearch(array,target) {
    let position = -1;
    let left = 0;
    let right = array.length - 1;
    while (left <= right && position === -1) {
        let middle = parseInt((left + right) / 2);
        let k = array[middle];
        if (k == target) {
            position = middle;
        }
        if (k > target)
            right = middle - 1;
        else
            left = middle + 1;
    }
    return position;
}
console.log(binarySearch(list,13));