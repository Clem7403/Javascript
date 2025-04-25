// you can write js here
console.log('hello from file');

let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?")

let celsius = kelvins - 273; /* Je crée la variable celsius qui contient comme valeur la soustraction de la variable kelvins (=294) - l'entier 273 */

let fahrenheits = Math.floor(celsius*(9/5)+32); /* J'utilise la fonction .floor(),en ajoutant le calcule en paramètre, pour stocker l'entier du résultat du calcul dans la variable. */


console.log("Il fait " + celsius +" degrées Celsius et " + fahrenheits + " degrées Fahrenheits.")