/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
// function howMany (string) {
//     let regex = /^[aeiouAEIOU]+$/;
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (regex.test(string.charAt(i))) {
//             count += 1;
//         }
//     }
//     return count;
// }

function howMany (string) {
    let vocali = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (vocali.includes(string.charAt(i))) {
            count += 1;
        }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console
// console.log(howMany('areeeaiUr'));
console.log(howMany(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)