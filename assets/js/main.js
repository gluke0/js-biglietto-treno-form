/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
- chiedere km percorso e età del passeggero
- prompt o input per km
- prompt o input per età
- calcolo costo viaggio (1km = 0.21€)
- calc km * costo/km
- sconto
- se passeggero min -> 20% off
- se passeggero over 65 -> 40% off
- display prezzo con massimo 2 decimali 
- 2.433333 -> 2.43
*/

// genera
let generateButton = document.getElementById("generate");
generateButton.addEventListener("click", function() {

let name = document.getElementById('name').value;
let surname = document.getElementById('surname').value;
let distance = document.getElementById('distance').value;
let age = document.getElementById('age').value;

// prezzo
const rate = 0.21;
let standardPrice = distance * rate;

// Sconto
let off20 = standardPrice - (standardPrice * 0.2);
let off40 = standardPrice - (standardPrice * 0.4);
let offer = 'STANDARD';

if (age == 'under18') {
    total = off20;
    offer = 'UNDER18';
} else if (age == 'over65') {
    total = off40;
    offer = 'OVER65';
} else {
    total = standardPrice;
}

// ticket e carrozza
let min = 75324;
let max = 1323523;
let discountCode = Math.floor(Math.random() * (max - min) ) + min;
let carriageNumber = Math.floor((Math.random() * 10) + 1);

// dati
document.getElementById('passenger_name').innerHTML = `${name} ${surname}`;
document.getElementById('discount_name').innerHTML = offer;
document.getElementById('carriage').innerHTML = carriageNumber;
document.getElementById('discount_code').innerHTML = discountCode;
document.getElementById('price').innerHTML = total.toFixed(2) + '€';

document.getElementById('ticket').className = 'show';
});

// annulla
let eraseButton = document.getElementById("delete");

eraseButton.addEventListener("click", function() {
document.getElementById('name').value = '';
document.getElementById('surname').value = '';
document.getElementById('distance').value = '';
document.getElementById('age').value = '';

document.getElementById('ticket').className = 'hidden';
});