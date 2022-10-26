const userName = prompt("Inserisci il tuo nome ");
const userSurname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Inserisci il tuo colore preferito");

const h1NomeUtente = document.getElementById("nome_utente");

h1NomeUtente.innerHTML = userName;

const pInfoUtente = document.getElementById("Utente");

pInfoUtente.innerHTML = `utente:
${userName}${userSurname}${userColor}21 `;

