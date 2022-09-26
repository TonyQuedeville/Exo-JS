/* Objet */ // (dictionnaire Python et fichier.json)
console.group(' Objet ');
let objet = {
    n: 0,
    a: 'toto',
    b: 'tata',
    c: 'titi',
};
console.log(objet);
/*---*/

/* ajouter une proprièté */
objet.d = 'tutu';
console.log(objet);
/*---*/

/* modifier une proprièté */
objet.n = 10;
console.log(objet);
/*---*/

/* supprimer une proprièté */ 
delete objet.d; // mauvaise pratique non conseillé
console.log(objet);
/*---*/

console.groupEnd();
/*---*/

/* tableau */
console.group(' Tableau ');

let fruits = ['banane', 'kiwi', 'orange'];
console.log(fruits[1]); // index tableau

console.groupEnd();
/*---*/

/* Affichages */
console.group(' Affichages ');

console.log(objet); // clés et valeurs
console.log(objet.b); // valeur
console.log(objet['b']); // valeur dynamique
console.log(Object.keys(objet)); // clés
console.log(Object.values(objet)); // valeurs
console.log(Object.entries(objet)); // clés et valeurs

console.groupEnd();
/*---*/

