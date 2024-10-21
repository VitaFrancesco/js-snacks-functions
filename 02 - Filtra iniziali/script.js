/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// let wordWithInitial = (array, letter)  => {
//     let returnArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].charAt(0) === letter.toUpperCase()) {
//             returnArray.push(array[i]);
//         } 
//     }
//     return returnArray;
// }

function wordWithInitial (array, letter) {
    let returnArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === letter.toUpperCase()) {
            returnArray.push(array[i]);
        } 
    }
    return returnArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(wordWithInitial(names, 'l'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]