/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function sayHiAtTime (who, time = 10) {
    if (time < 0 || time > 24) {
        console.error('The time is incorrect');
        return false;
    }
    let message = time < 14 ? `Buongiorno ${who}` : (time < 18 ? `Buon pomeriggio ${who}` : `Buonasera ${who}`);
    return message;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(sayHiAtTime(name, 18));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.