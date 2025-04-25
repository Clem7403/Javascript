// you can write js here
console.log('exo-2');


let isTesting = true;


const myDate = new Date();
console.log(myDate)

let semaine = "Nous sommes en semaine.";
let weekend = "C'est le weekend !";

// let jours = myDate.getUTCDay();
// console.log(jours);

// let heures = myDate.getUTCHours();
// console.log(heures);

if (isTesting){
    jours = myDate.getUTCDay();
    heures = myDate.getUTCHours();
} else {
    jours = prompt("Choisi le jour à tester.");
    heures = prompt("Choisi l'heure à tester.");
}



function date(){
    if ( jours == 1 && heures > 7 || jours == 2 || jours == 3 || jours ==4 || jours == 5 && heures <= 15 ){
        console.log(semaine)
    } else {
        console.log(weekend);
    }   
}

console.log(date());
