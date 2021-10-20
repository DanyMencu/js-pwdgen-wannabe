/* 
1. Chiedere all'utente il nome
2. Chiedere all'utente il cognome
3. Chiedere all'utente il suo colore preferito
 */
// 1
const Nome = prompt ("Come ti chiami?");
// 2
const Cognmome = prompt ("Quale è il tuo cognome?");
// 3
const Colore = prompt ("Quale è il tuo colore preferito?");

/* 
Generare la password unendo i dati dell'utente
 */
const Password = Nome + Cognmome + Colore + "21";

console.log (Password);

/* Mostrare a scherom la password generata */

document.getElementById ("passwordGen") .innerHTML = "La tua password (SUPER SICURA) è: " + Password;

/* 
document.getElementById ("passwordGen") .innerHTML = `La tua password (SUPER SICURA) è: ${Password};`
*/
