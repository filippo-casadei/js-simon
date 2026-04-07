// 1) Creo un array vuoto che deve contenere i miei 5 numeri random.
// 1) creo un ciclo while per forza perchè altrimenti non so come ovviare alla possibilità
// 1) che vengano creati 2 numeri uguali.
// =========================================================================================
// 2) collego gli elementi che penso possano servirmi dal file HTML a JS creando delle variabili
// 2) suppongo siano tutti gli elementi con un id btw.
// =========================================================================================
// 3) creo una variabile stringaHtml vuota e con un ciclo for gli passo gli elementi dell'array
// 3) di cinque numeri random, trasformandoli in una stringa HTML, scrivo nel mio file HTML 
// 3) dentro a numberList usando inner.HTML 
// =========================================================================================
// COUNTDOWN di 30 secondi
// 4) Creo una variabile per i secondi che deve essere === 30.
// 4) Creo un event timer con setInterval in modo che ogni secondo scenda di 1
// 4) lo mostro in HTML usando l'id countdown che ho "preso" in precedenza.




// 1) ARRAY VUOTO + CICLO WHILE PER CREARE ARRAY DI 5 NUMERI RANDOM
let arrayDiCinqueNumeriVuoto = [];

while (arrayDiCinqueNumeriVuoto.length < 5) {
    let numeroRandom = Math.floor (Math.random() * 50) +1;
    if (!arrayDiCinqueNumeriVuoto.includes(numeroRandom)){
        arrayDiCinqueNumeriVuoto.push(numeroRandom);
    }

}

// 2) ELEMENTI HTML CHE COLLEGO A JS 
const countdown = document.querySelector("#countdown");
const numbersList = document.querySelector("#numbers-list");
const answersForm = document.querySelector("#answers-form");
const message = document.querySelector("#message");


// 3) STRINGA VUOTA DENTRO LA QUALE CICLO GLI ELEMENTI DELL'ARRAY
// 3) TRASFORMANDOLI IN <li>
let stringaHtml = "";
for (let i = 0; i <= 4; i++) {
    stringaHtml = stringaHtml + `<li>${arrayDiCinqueNumeriVuoto[i]}</li>`
}

// 3) CON INNERHTML SCRIVO I NUMERI ALL'INTERNO DI number-list IN HTML
numbersList.innerHTML = stringaHtml;
    
// 4) VARIABILE PER I SECONDI 
let secondi = 30;
countdown.innerHTML = secondi;

// 4) VARIABILE PER IL TIMER 
const cronometro = setInterval(() => {
    secondi = secondi -1;
    countdown.innerHTML = secondi;

    if (secondi === 0) {
        clearInterval(cronometro);
    }
    
}, 1000);