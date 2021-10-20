/* 
Dati dell'utente per la password
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

/* Mostrare a scherom la password generata */

document.getElementById ("passwordGen") .innerHTML = "La tua password (SUPER SICURA) è: " + Password;

/* 
document.getElementById ("passwordGen") .innerHTML = `La tua password (SUPER SICURA) è: ${Password};`
*/
