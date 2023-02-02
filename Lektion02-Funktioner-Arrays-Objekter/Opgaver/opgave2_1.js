let array = [1,2,3,4,5,6,7];

// Største tal i arrayet
function max(array) {
    let max = 0;
    for (let i of array) {
        if (i > max) {
            max = i;
        }
    }
    return max;
}
console.log(max(array));

// Contains element i arrayet og retunerer true hvis det er der
function contains(array, element) {
    let found = false;
    for (let e of array) {
        if (e === element) {
            found = true;
        }
    }
    return found;
}
console.log(contains(array,6));

// Finder summen af et array
function sum(array) {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    return sum;
}
console.log(sum(array));