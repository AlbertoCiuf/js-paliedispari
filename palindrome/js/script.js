//data in input una parola, verificare se è palindroma e stampare se lo è oppure no

//dichiaro le variabili
const parolaScelta = prompt('Scegli una parola da analizzare');
let output ='La parola scelta NON è palindroma';
const content = document.getElementById('content');

//chiamo la funzione che controlla se la parola scelta è palindroma oppure no
let result = palindromeCheck(parolaScelta);
console.log(result);
//definisco l'output
if(result) {
  output = 'La parola scelta è palindroma.'
}
//stampo a schermo l'output
content.innerHTML = output;



//dichiaro la funzione che determina se la parola è palindroma oppure no.
//parola : parola da analizzare - la parola viene suddivisa in singole lettere, che vengono messe in ordine contrario e successivamente vengono riunite in una singola parola. Se la parola originale è uguale a quella così ottenuta, il risultato sarà true ad indicare che la parola messa in input è palindroma.
function palindromeCheck(parola) {
  let res = false;
  let parolaReverse = parola.split("").reverse().join("");
  console.log(parolaReverse);
  if (parola == parolaReverse) {
    res = true;
  }
  return res;
}


