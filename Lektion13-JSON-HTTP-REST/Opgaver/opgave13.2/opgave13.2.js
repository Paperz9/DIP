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

