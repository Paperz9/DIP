// Opgave 13.2 - Chatrum

// DOM-elemeter
const chatrumSelect = document.querySelector("#chatrum");
const beskederListe = document.querySelector("#beskeder");
const tekstInput = document.querySelector("#tekst");
const opretKnap = document.querySelector("#opret");
const sletKnap = document.querySelector("#slet");

// Endepunkter
const beskederURL = 'https://beskedserver.azurewebsites.net/api/Beskeder/';
const soegBeskederURL = 'https://beskedserver.azurewebsites.net/api/SoegBeskeder/{rum}';
const rumURL = 'https://beskedserver.azurewebsites.net/api/chatRum/';

// Variabler til at gemme aktuelt valgte chatrum og beskeder
let aktueltChatrum = "alle";
let beskeder = [];

function opdaterBeskeder() {
    beskederListe.innerHTML = "";

    const visBeskeder = beskeder.filter(besked => aktueltChatrum === 'alle' || besked.chatrum === aktueltChatrum);

    visBeskeder.forEach(besked => {
        const li = document.createElement("li");
        li.textContent = '{$besked.chatrum}: ${besked.tekst}';
        beskederListe.appendChild(li);
    });
}

async function hentBeskeder() {
    try {
        const response = await fetch(beskederURL);
        beskeder = await response.json();
        opdaterBeskeder();
    } catch (error) {
        console.error(error);
    }
}

async function hentBeskederIChatrum(chatrum) {
    try {
        const response = await fetch('${soegBeskederURL}${chatrum}');
        beskeder = await response.json();
        aktueltChatrum = chatrum;
        opdaterBeskeder();
    } catch (error) {
        console.error(error);
    }
}

