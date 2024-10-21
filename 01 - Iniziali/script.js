/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// function arrayInitialLetter (array) {
//     let intialArray = []
//     for ( let i = 0; i < array.length; i++) {
//         intialArray.push((array.at(i)).charAt(0))
//     }
//     return intialArray
// }

let arrayInitialLetter = (array) => {
    let intialArray = []
    for ( let i = 0; i < array.length; i++) {
        intialArray.push((array.at(i)).charAt(0))
    }
    return intialArray
}


// Invoca la funzione qui e stampa il risultato in console
console.log(arrayInitialLetter(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]