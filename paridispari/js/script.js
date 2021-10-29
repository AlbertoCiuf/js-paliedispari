/*
  scegliere tra pari e dispari
  fare inserire num da 1 a 5 all'utente
  funzione che genera numero random da 1 a 5 per il pc
  confronto e output
*/


//dichiaro variabili
let pariDispari = prompt('Scegli "pari" o "dispari"');
let numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 5'));
let numeroPC;
let sommaNum;
let result = 'Hai perso';

//chiamo la funzione
numeroPC = generaNumPc();
console.log(numeroPC);
sommaNum = numeroUtente + numeroPC;

//controllo se pari o dispari
if(!(sommaNum%2) && pariDispari === 'pari') {
 result = 'Hai vinto!';
} 

console.log(result);

//output
const content = document.getElementById('content');
content.innerHTML = 
`
  Hai scelto il numero ${numeroUtente}, il PC ha estratto ${numeroPC}. <br>
  ${result}
`;


//dichiaro la funzione che genera il numero random per il pc
function generaNumPc() {
  let numPC = Math.floor(Math.random()*5)+1;
  return numPC;
};



