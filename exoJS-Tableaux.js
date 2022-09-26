const elts = [
    {
        n: 10,
        a: 'toto',
        b: 'tata',
        c: 'titi',
    },
    {
        n: 11,
        a: 'momo',
        b: 'mama',
        c: 'mimi',
    },
    {
        n: 12,
        a: 'popo',
        b: 'papa',
        c: 'pipi',
    },
    {
        n: 13,
        a: 'roro',
        b: 'rara',
        c: 'riri',
    }
]

/* Trouver 1 élément */
console.group(' Trouver 1 élément ');

// elts.find((parametre) => condition)
console.log(elts.find(elts => elts.a === 'popo'));
console.log(elts.find(elts => elts.a === 'xx')); // undifined
console.log(elts.findIndex(elts => elts.a === 'popo'));
console.log(elts.findIndex(elts => elts.a === 'xx')); // -1
console.log(elts.find(elts => elts.n > 10)); // s'arrète au premier élément qui valide la condition

console.groupEnd();
/*---*/

/* Trouver les éléments */
console.group(' Trouver les éléments ');

const eltsFiltre = elts.filter(elt => elt.n > 10); // tout les éléments qui valident la condition
console.log(eltsFiltre);

console.groupEnd();
/*---*/

/* Trancher */
console.group(' Trancher ');

console.log(elts.slice(1,3)); // slice : Une tranche de la liste de parm1 à parm2 exclu.

console.groupEnd();
/*---*/

/* Supprimer le premier élément */
console.group(' Supprimer le premier élément ');

console.log(elts.shift()); // 
console.log(elts);

console.groupEnd();
/*---*/

/* Supprimer le dernier élément */
console.group(' Supprimer le dernier élément ');

console.log(elts.pop()); // 
console.log(elts);

console.groupEnd();
/*---*/

/* Trier */
console.group(' Trier ');

let eltsStr = ['H', 'R', 'A', 'C', 'Z']
let eltsInt = [5, 21, 87, 4, 3, 65, 12]
console.log(eltsStr.sort()); // tri par ordre alphabetique par défault
console.log(eltsInt.sort()); //  tri par ordre alphabetique des chiffres

//  ic: iteration constante et is: iteration suivante
console.log(eltsInt.sort((ic,is) => ic-is)); // tri par ordre croissant
console.log(eltsInt.sort((ic,is) => is-ic)); // tri par ordre décroissant

console.groupEnd();
/*---*/

/* Ajouter */
console.group(' Ajouter ');

eltsStr.push('toto'); // ajoute à la fin 
console.log(eltsStr);
eltsStr.unshift('tata'); // ajoute au début 
console.log(eltsStr);
eltsStr.unshift('titi', 'tutu', 'tete'); // ajoute au début 
console.log(eltsStr);

console.groupEnd();
/*---*/

/* Supprimer */
console.group(' Supprimer ');

eltsStr.splice(1,3); // supprime par tranche (remplace par rien)
console.log(eltsStr);
eltsStr.splice(0,2, 'xxx', 'yyy'); // remplace 2 elts par ... 3ème param
console.log(eltsStr);
eltsStr.splice(0,1, 'iii', 'jjj'); // remplace 1 elt par 2 elts
console.log(eltsStr);

console.groupEnd();
/*---*/

/* Inverser */
console.group(' Inverser ');

eltsStr.reverse(); 
console.log(eltsStr);

console.groupEnd();
/*---*/

/* Fusionner */
console.group(' Fusionner ');

const tabFusion = eltsStr.concat(eltsInt); 
console.log(tabFusion);

console.groupEnd();
/*---*/

/* Split */
console.group(' Split ');

let chaine = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum non nesciunt odio facilis soluta, in necessitatibus illum, incidunt dolore libero sapiente sunt tenetur repellat dolores at! Molestiae nostrum temporibus vitae?'
const tabSplit = chaine.split(' '); 
console.log(tabSplit);
console.log(tabSplit.join(' '));

console.groupEnd();
/*---*/

/* Shallow copy */
console.group(' Shallow copy ');

let tab1 = ['toto', 'tata'];
let tab2 = tab1;
tab1.push('titi'); // répercussion sur tab1
console.log(tab1);
console.log(tab2);

let tab3 = ['toto', 'tata'];
let tab4 = [...tab3]; // assignation Spread : pas de répercussion sur tab4
tab3.push('tutu');
console.log(tab3);
console.log(tab4);

console.groupEnd();
/*---*/

/* Deep copy */
console.group(' Deep copy ');

let tab5 = [{nom:'toto'}, {nom:'tata'}];
let tab6 = JSON.parse(JSON.stringify(tab5)); // .stringify serialisation, .parse déserialisation
// Mais ça ne marche pas pour certains autres types : date, undifined, ect...

tab5[0].nom = 'titi';
console.log(tab5);
console.log(tab6);

console.groupEnd();
/*---*/









