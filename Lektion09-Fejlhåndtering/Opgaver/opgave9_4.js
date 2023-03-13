// Opgave 9.4

// a
// function compose(f1, f2, a) {
//     return f1(f1(a));
// }

// b
// function compose(f1, f2) {
//     return x => f1(f2(x));
// }

function compose(...functions) {
    return x => functions.reduce((total, func) => func(total,) ,x);
}

function fone(number) {
    return number + 10;
}

function ftwo(number) {
    return number + 10;
}

function fthree(number) {
    return number + 10;
}

function ffour(number) {
    return number + 10;
}

// a skulle gerne blive 150
// console.log(compose(fone, ftwo));

// b skulle gerne blive 150
// console.log(compose(fone, ftwo)(5));

// c
console.log(compose(fone, ftwo, fthree, ffour)(5));