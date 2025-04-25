// you can write js here
console.log('exo-2');

const myDate = new Date();
console.log(myDate)

let semaine = "Nous sommes en semaine.";
let weekend = "C'est le weekend !";

let jours = 5/*myDate.getUTCDay();*/
console.log(jours);

let heures = 15/*myDate.getUTCHours();*/
console.log(heures);


function date(){
    if (jours == 1 || jours == 2 || jours == 3 || jours ==4  ){
        console.log(semaine)
    } else if (jours == 0 || jours == 6) {
        console.log(weekend);
    } else if (jours == 5 && heures >= 15) {
        console.log(weekend);
    } else if (jours == 5){
        console.log(semaine);
    }
}

console.log(date());





