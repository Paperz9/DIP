// Compare
function compare(s1, s2) {
    if (s1 < s2) {
        return -1;
    } else if (s1 > s2) {
        return 1;
    } else {
        return 0;
    }
}
console.log(compare("Kasper", "Ellinor"));

// CompareLen
function compareLen(s1, s2) {
    if (s1.length < s2.length) {
        return -1;
    } else if (s1.length > s2.length) {
        return 1;
    } else {
        return 0;
    }
}
console.log(compareLen("Kasper", "Ellinor"));
console.log(compareLen("Ellinor", "Kasper"));

// CompareIgnoreCase
function compareIgnoreCase(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    if (s1 < s2) {
        return -1;
    } else if (s1 > s2) {
        return 1;
    } else {
        return 0;
    }
}
console.log(compareIgnoreCase("KasPer", "kasper"));

// Bubblesort med compare
let list = ["Kasper", "Ellinor", "Ole", "Alle", "Nederen"];

function bubbleSort(array, compareFun) {
    const swap = (a,b) => [array[a], array[b]] = [array[b], array[a]];
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compareFun(array[j], array[j+1]) == 1) {
                swap(j, j+1);
            }
        }
    }
}
bubbleSort(list, compare);
console.log(list.toString());