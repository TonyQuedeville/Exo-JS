let a = 42;
let b = 36;
let c = '42';

/* Opérateur */
console.group('Opérateur');

console.log(a + b); // addition
console.log(a - b); // soustraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // reste division

console.log(a * (b+a)); // priorité

console.log(2 ** 4); // puissance
console.log(Math.pow(2, 4)); // puissance

a = a++; // incrémentation suffix
console.log(a);
a = ++a; // incrémentation préfix
console.log(a);
a = --a; // décrémentation
console.log(a);

console.groupEnd();
/*---*/

/* Opérateur d'affectaion */
console.group('Opérateur d\'affectation');

a += 2;
console.log(a);
a /= 2;
console.log(a);
a += ' ans';
console.log(a);

console.groupEnd();
/*---*/

/*  */
console.group('-');

const user = {
    nom : 'Steel',
    prenom : 'Toto',
    age : 49,
    instrument : 'drum'
}

console.log(user);
console.log(user.nom);

// ajout de proprièté
user.ville = 'Barentin'; // mauvaise pratique parce que user est une constante
console.log(user.ville);
// Bonne pratique
/* ... : opérateur de ventillation. 
Récupère toute les propriètés avant d'ajouter la nouvelle en copiant le contenu de user.
Permet de respecter le principe d'immutabilité de la constatnte (const user)
*/
let userComplete = {...user, pays: 'France'}; 
console.log(userComplete.pays);

console.groupEnd();
/*---*/

/* Opérateurs logiques */
console.group('Opérateurs logiques');

// || est prioritaire sur &&
if(b >= 55 || user.nom == 'Steel' && user.prenom == "Toto"){
    console.log(true);
}
else{
    console.log(false);
}

let bool = true;
if(bool){
    console.log('bool = vrai' )
}

bool = false;
if(!bool){ // not
    console.log('bool = faux' )
}
console.groupEnd();
/*---*/

/*  Egalité */
console.group(' Egalité ');

console.log('2' == 2); // comparaison par valeur
console.log('2' === 2); // comparaison par valeur et type
console.log('2' != 2); // comparaison par valeur
console.log('2' !== 2); // comparaison par valeur et type

console.groupEnd();
/*---*/

/* Condition ternaire */
console.group(' Condition ternaire ');

console.log(bool ? message = 'bool = vrai' : 'bool = faux');
bool = true;
console.log(bool ? message = 'bool = vrai' : 'bool = faux');

// équivalent
console.log(bool == true ? 'bool = vrai' : 'bool = faux');

console.groupEnd();
/*---*/

/* Switch/Case */
console.group(' Switch/Case ');

let fruit = 'Kiwi';

switch (fruit) {
    case "Banane":
        console.log("Banane");
        break;
    case "Orange":
        console.log("Orange");
        break;
    case "Kiwi":
        console.log("Kiwi");
        break;
    default :    
        console.log("aucun");
        break; // facultatif puisque qu'en dernier
}

console.groupEnd();
/*---*/