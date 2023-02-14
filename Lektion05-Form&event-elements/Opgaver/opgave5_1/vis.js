let talInput = document.getElementById('tal');
let tidInput = document.getElementById('tid');

talInput.outerHTML = '<label>Tal:</label>' + talInput.outerHTML;
tidInput.outerHTML = '<label>Tid:</label>' + tidInput.outerHTML;

let tal = document.getElementById("tal");
tal.onclick = () => tal.value = Math.random() * 100;

let tid = document.getElementById("tid");
tid.onclick = () => tid.value = new Date();