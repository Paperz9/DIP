let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}
console.log(array.toString());

let target = 0;
let indeks = -1;
let left = 0;
let right = array.length - 1;
while (indeks == -1 && left <= right) {
    let middle = Math.floor((left + right) / 2);
    let k = array[middle];
    if (k == target) {
        indeks = middle;
    } else if (k > target) {
        right = middle - 1;
    } else {
        left = middle + 1;
    }
}
console.log(indeks);