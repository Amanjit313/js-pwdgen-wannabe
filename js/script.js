/* 
  Password Generator

  1) Nome Utente
  2) Cognome Utente
  3) Colore preferito

*/

const nome = (prompt("Nome"));

const cognome = (prompt("Cognome"));

const colore = (prompt("Colore preferito"));

const uniti = nome + cognome + colore;

console.log(uniti);

document.getElementById("text").innerHTML = uniti;