/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: il console.log mostrerà in entrambi i casi 3.14, nel primo caso perchè gli stiamo semplicemente chiedendo di mostrarci una costante, nel secondo perchè si verifica la condizione dell'if

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: il primo console.log restituirà "Il mio colore preferito è violet"; il secondo restituirà "Ci sono 12 mesi in un anno."

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
/* RISPOSTA: il primo console.log restituirà "Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana." 
perchè quando richiamiamo la funzione "makePizza" abbiamo assegnato al parametro "moreIngredients" il valore "rucola, prosciutto crudo e scaglie di grana."
e la variabile "theSecond" è nello Scope locale della funzione;
il secondo console.log invece restituirà errore perchè la variabile "theSecond" è dichiarata solo nello scope locale della funzione "makePizza" 
quindi non può vederla dato che ci troviamo fuori scope*/
function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}