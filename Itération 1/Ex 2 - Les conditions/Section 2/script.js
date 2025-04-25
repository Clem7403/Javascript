// you can write js here
console.log('exo-2');

const myDate = new Date();
console.log(myDate)

let semaine = "Nous sommes en semaine.";
let weekend = "C'est le weekend !";

let jours = myDate.getUTCDay();
console.log(jours);

function date(){
    if (jours == 1 || jours == 2 || jours == 3 || jours ==4 || jours == 5){
        console.log(semaine)
    } else {
        console.log(weekend);
    }
}

console.log(date());
