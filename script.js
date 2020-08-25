// chiedo all'utente il suo cognome
var cognome = prompt("inserisci il tuo cognome");
// creo array di cognomi
var lista = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"];
console.log(lista);
// aggiungo mio cognome nell'array
lista.push(cognome);
// ordino alfabeticamente l'array
lista.sort();
console.log(lista);
// stampo array
var posizione = 0;
for (i = 0; i < lista.length; i++){
if (cognome == lista[i]) {
  posizione = i + 1;
  console.log(posizione);
 }
}
