// Creo un array vuoto che deve contenere i miei 5 numeri random.
// creo un ciclo while per forza perchè altrimenti non so come ovviare alla possibilità
// che vengano creati 2 numeri uguali.
// =========================================================================================
// collego gli elementi che penso possano servirmi dal file HTML a JS creando delle variabili
// suppongo siano tutti gli elementi con un id btw.
// =========================================================================================
// 

// ARRAY VUOTO + CICLO WHILE PER CREARE ARRAY DI 5 NUMERI RANDOM
let arrayDiCinqueNumeriVuoto = [];

while (arrayDiCinqueNumeriVuoto.length < 5) {
    let numeroRandom = Math.floor (Math.random() * 50) +1;
    if (!arrayDiCinqueNumeriVuoto.includes(numeroRandom)){
        arrayDiCinqueNumeriVuoto.push(numeroRandom);
    }

}

// ELEMENTI HTML CHE COLLEGO A JS 
const countdown = document.querySelector("#countdown");
const numbersList = document.querySelector("#numbers-list");
const answersForm = document.querySelector("#answers-form");
const message = document.querySelector("#message");