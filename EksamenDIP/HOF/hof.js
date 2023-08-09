/*
HOF står for "Higher-Order Functions" (højereordensfunktioner) i programmering.
Dette begreb refererer til en vigtig konceptuel idé inden for funktionel programmering og JavaScript.
En højereordensfunktion er simpelthen en funktion, der enten tager en eller flere funktioner som argumenter eller returnerer en funktion som resultat.

HOF er et kraftfuldt koncept, fordi det giver dig mulighed for at arbejde med funktioner
på samme måde som du ville arbejde med andre datatyper som tal eller strenge. 
Det muliggør også mere abstrakt og generisk programmering.
*/

let cars = [
    {nummerplade: 1234567, vaegt: 3000, maerke: 'BMW', antalHjul: 4},
    {nummerplade: 7654321, vaegt: 4000, maerke: 'Tesla', antalHjul: 8},
    {nummerplade: 1234123, vaegt: 5000, maerke: 'VW', antalHjul: 7},
    {nummerplade: 7162534, vaegt: 1000, maerke: 'KIA', antalHjul: 8},
    {nummerplade: 5252525, vaegt: 6000, maerke: 'BMW', antalHjul: 10},
    {nummerplade: 6666666, vaegt: 5000, maerke: 'VW', antalHjul: 10}
];

// array af biler med 8 hjul
/*
filter(): filter-funktionen bruges på arrays til at filtrere elementer baseret på en betingelse defineret af en funktion.
*/
let result = cars.filter(c => c.antalHjul === 8);
console.log(result);

// array af alle nummerplader
/*
map(): map-funktionen bruges på arrays til at transformere hvert element i arrayet ved hjælp af en given funktion og returnerer et nyt array med de transformerende resultater.
*/
let resultNummerplader = cars.map(car => car.nummerplade);
console.log(resultNummerplader);

// find den mindste vægt
/*
reduce(): reduce-funktionen bruges til at reducere elementerne i et array til en enkelt værdi ved at anvende en funktion på hvert element og akkumulere resultatet.
*/
console.log(cars.reduce((mindste, car) => mindste = car.vaegt < mindste.vaegt ? car : mindste));

// find de biler med flest antal hjul
let flestAntalHjul = cars.filter(car => car.antalHjul === Math.max(...cars.map(car => car.antalHjul)));
console.log(flestAntalHjul);
/*
forEach(): forEach-funktionen bruges til at udføre en given funktion på hvert element i et array.
*/
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});


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