// Opgave 9.1 

let persons = [
    {name: 'Kasper', age: 30, mobilNr: '30315057'},
    {name: 'Ellinor', age: 29, mobilNr: '12345678'},
    {name: 'Ole', age: 15, mobilNr: '42042069'},
    {name: 'Jakob', age: 47, mobilNr: '69696969'},
    {name: 'Line', age: 60, mobilNr: '87654321'},
    {name: 'Anders', age: 25, mobilNr: '88776655'}
];

// Find person med et bestemt mobilnummer
console.log(persons.filter(p => p.mobilNr === '12345678')[0]);

// Find den mindste alder
console.log(persons.reduce((mindste, p) => mindste = p.age < mindste.age ? p : mindste));

// Modificer arrayet med personer, så personerne nu får et fortløbende id.
persons.forEach((person, index) => (person.id = index));
console.log(persons);

// Generer en tekststreng, der indeholder personernes navne - kommasepareret og i sorteret rækkefølge.
console.log(persons.sort((p1, p2) => p1.name.localeCompare(p2.name)).map(p => p.name));

// Generer et array med navn og mobilnummer på de personer, der er yngre end 30.
let result = persons.filter(p => p.age < 30).map(p => (p.name + " " + p.mobilNr));
console.log(result);