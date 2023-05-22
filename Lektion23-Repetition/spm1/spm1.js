let cars = [
    {nummerplade: 1234567, vaegt: 3000, maerke: 'BMW', antalHjul: 4},
    {nummerplade: 7654321, vaegt: 4000, maerke: 'Tesla', antalHjul: 8},
    {nummerplade: 1234123, vaegt: 5000, maerke: 'VW', antalHjul: 7},
    {nummerplade: 7162534, vaegt: 1000, maerke: 'KIA', antalHjul: 8},
    {nummerplade: 5252525, vaegt: 6000, maerke: 'BMW', antalHjul: 10},
    {nummerplade: 6666666, vaegt: 5000, maerke: 'VW', antalHjul: 10}
];

// array af biler med 8 hjul
let result = cars.filter(c => c.antalHjul === 8);
console.log(result);

// array af alle nummerplader
let resultNummerplader = cars.map(car => car.nummerplade);
console.log(resultNummerplader);

// find den mindste vægt
console.log(cars.reduce((mindste, car) => mindste = car.vaegt < mindste.vaegt ? car : mindste));

// find de biler med flest antal hjul
let flestAntalHjul = cars.filter(car => car.antalHjul === Math.max(...cars.map(car => car.antalHjul)));
console.log(flestAntalHjul);

let start = [];
let aggregeretAntalEfterHjel = cars.reduce((agg, b) => {
    if (typeof agg[b.antalHjul] === 'undefined') {
        agg[b.antalHjul] = 1;
    } else {
        agg[b.antalHjul]++;
    }
    return agg;
}, start);
console.log(aggregeretAntalEfterHjel);