// Creo un array vuoto che deve contenere i miei 5 numeri random.
// creo un ciclo while per forza perchè altrimenti non so come ovviare alla possibilità
// che vengano creati 2 numeri uguali.

let arrayDiCinqueNumeriVuoto = [];

while (arrayDiCinqueNumeriVuoto.length < 5) {
    let numeroRandom = Math.floor (Math.random() * 50) +1;
    if (!arrayDiCinqueNumeriVuoto.includes(numeroRandom)){
        arrayDiCinqueNumeriVuoto.push(numeroRandom);
    }

}