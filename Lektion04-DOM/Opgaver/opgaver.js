// Tilføj kode for opgave 4.1 - 4.5 her!

// Opgave 4.1
for (let p of document.querySelectorAll('p')) {
    p.style.color = 'red';
}

// Opgave 4.2
for (let h of document.querySelectorAll('h1')) {
    h.nextElementSibling.nextElementSibling.style.color = 'brown';
}

// Opgave 4.3
for (let l of document.querySelectorAll('li:nth-child(odd)')) {
    l.style.backgroundColor = 'lightgrey';
}

// Opgave 4.4
for (let o of document.querySelectorAll('h1')) {
    o.nextElementSibling.outerHTML = '<h2>' + o.nextElementSibling.innerHTML + '</h2>';
}

// Opgave 4.5
let hAll = document.querySelectorAll('h1');
let id = 1;
for (let ho of hAll) {
    ho.id = 'id' + id++;
}

let firstElement = document.querySelector('h1');
firstElement.outerHTML = getLinks() + firstElement.outerHTML;

function link(h1) {
    let l = '<a href="#' + h1.id + '">Overskrift' + " " + h1.id + '</a>';
    return l;
}

function getLinks() {
    let links = "";
    for (let a of document.querySelectorAll('h1')) {
        links += link(a) + " ";
    }
    return links;
}

